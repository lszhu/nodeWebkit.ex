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
    var frame = document.getElementById('alimama');
    frame.src = aliLinks['linkChang'];
}

// get goods promotion link
function getTbkLink() {
    var web = document.getElementById('alimama').contentDocument;
    return web.querySelector('textarea').value;
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

var tempLink = 'http://detail.tmall.com/item.htm?spm=a1z10.4.w5003-6987350847.59.siyg9n&id=38548928798&scene=taobao_shop';
var link = tempLink;
// translate normal link to TaoBaoKe link
function linkTranslate(link) {
    var web = document.getElementById('alimama').contentDocument;
    web.querySelector('textarea').value = link;
    web.querySelector('button').click();
    // query delay time.
    var time = 2000;
    // every 50ms poll the anchors and trigger click event in correct anchor.
    function poll() {
        time -= 50;
        if (time < 0) {
            console.log('query time out.');
            return;
        }
        var form = web.querySelector('form');

        var as = web.querySelectorAll('a');
        if (form && as) {
            var promote = form.querySelectorAll('span.dropdown-text');
            if (promote) {
                console.log(promote);
                for (var i = 0; i < as.length; i++) {
                    if (as[i].innerText == '确定') {
                        as[i].click();
                        return;
                    }
                }
            }
        }
        window.setTimeout(poll, 50);
    }
    poll();
}