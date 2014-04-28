function noop(name, dom) {
    var msg = document.createElement('div');
    msg.innerText = name + ' op finished.';
    dom.appendChild(msg);
}