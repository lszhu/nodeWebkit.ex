exports.noopDomMsg = function noopDomMsg(name, dom) {
    var msg = window.document.createElement('div');
    msg.innerText = name + ' op finished.';
    dom.appendChild(msg);
    console.log(msg.innerText);
};

exports.noopAlert = function noopAlert(name) {
    alert(name + ' op finished.');
};
