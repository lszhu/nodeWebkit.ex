/**
 * Created by Jason on 2014/5/2.
 */

// alimama related links
var aliLinks = {
    login: 'https://login.taobao.com/member/login.jhtml?style=mini' +
        'simple&from=alimama&redirectURL=http%3A%2F%2Flogin.taobao' +
        '.com%2Fmember%2Ftaobaoke%2Flogin.htm%3Fis_login%3d1&full_' +
        'redirect=true&disableQuickLogin=true',
    home: 'http://www.alimama.com/index.htm',
    tblm: 'http://pub.alimama.com/index.htm',
    linkChang: 'http://pub.alimama.com/index.htm#!/promo/self/links'
};

// TaoBao account used to login alimama TaoBaoLianMeng
var account = {username: 'test', password: 'default'};

// login to Alimama TaoBaoLianMeng using TaoBao account
function loginAlimama(acc) {
    var web = document.getElementById('alimama').contentDocument;
    var username = web.getElementById('TPL_username_1');
    var password = web.getElementById('TPL_password_1');
    username.value = acc.username;
    password.value = acc.password;
    web.getElementById('J_SubmitStatic').click();
}

// enter TaoBaoLianMeng account's management home page.
function enterTblm() {
    var web = document.getElementById('alimama').contentDocument;
    web.querySelector('a[href="http://pub.alimama.com/index.htm"]').click();
}

// enter webpage for translating normal goods link to TaoBaoKe link.
function translator() {
    var alimama = document.getElementById('alimama');
    alimama.src = aliLinks['linkChang'];
}

// get goods promotion link
function getTbkLink() {
    timeout -= 100;
    var web = document.getElementById('alimama').contentDocument;
    var links =  web.querySelectorAll('textarea');
    if (links && links[1] &&
        links[1].value.search('http://s.click.taobao.com') != -1) {
        // open TaoBaoKe link to prepare shopping.
        openTbkLink(links[1].value);
    } else {
        setTimeout(getTbkLink, 100);
    }
}

// open TaoBaoKe link to prepare shopping.
function openTbkLink(link) {
    console.log('TaoBaoKe link is: ' + link);
    //var alimama = document.getElementById('alimama');
    window.open(link);
}

// check the url to select correct window load event handler.
function roam() {
    var subWindow = document.getElementById('alimama').contentWindow;
    var href = subWindow.location.href;
    if (href == aliLinks['login']) {
        loginAlimama(account);
    } else if (href.search(aliLinks['home']) != -1) {
        //enterTblm();
        translator();
    } else if (href.search(aliLinks['linkChange']) != -1) {
        linkTranslate(link);
    }
}

var tempLink = 'http://detail.tmall.com/item.htm?spm=a1z10.1.w5003-5411246920.2.06shHl&id=36548837757&rn=82efd45019cd6428a22d115cfd20bdff&scene=taobao_shop';
var link = tempLink;

// query delay time.
var timeout = 2000;

// translate normal link to TaoBaoKe link
function linkTranslate(link) {
    timeout -= 50;
    var web = document.getElementById('alimama').contentDocument;
    var textArea = web.querySelector('textarea');
    var submit = web.querySelector('button');
    if (timeout > 0 && (!textArea || !submit)) {
        setTimeout(function() {linkTranslate(link);}, 50);
        return;
    }
    textArea.value = link;
    submit.click();
    timeout = 2000;
    setTimeout(pollOpt, 500);
}

// every 50ms poll the anchors and trigger click event in correct anchor.
function pollOpt() {
    timeout -= 100;
    if (timeout < 0) {
        console.log('query time out.');
        return;
    }
    var web = document.getElementById('alimama').contentDocument;
    var form = web.querySelector('form');
    var as = web.querySelectorAll('a');
    if (form && as) {
        var promote = form.querySelectorAll('span.dropdown-text');
        var channel = form.querySelectorAll('span.title');
        console.log(channel);
        if (promote && promote.length > 1 && channel) {
            //console.log(promote);
            //console.log('innerText: ' + as[76].innerText == '确定');
            for (var i = 0; i < as.length; i++) {
                console.log(as[i].innerText.search('\u786e\u5b9a') != -1);
                //check as[i].innerText == '确定'
                if (as[i].innerText.search('\u786e\u5b9a') != -1) {
                    console.log(as[i]);
                    //setTimeout((function(i) {return as[i].click})(i), 100);
                    as[i].click();
                    setTimeout(getTbkLink, 200);
                    return;
                }
            }
        }
    }
    setTimeout(pollOpt, 100);
}