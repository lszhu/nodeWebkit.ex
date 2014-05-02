/**
 * Created by Jason on 2014/5/2.
 */

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

// get goods promotion link
function getTbkLink() {
    var web = document.getElementById('alimama').contentDocument;
    return web.querySelector('textarea').value;
}
