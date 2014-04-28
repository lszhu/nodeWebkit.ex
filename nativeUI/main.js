function noopDomMsg(name, dom) {
    var msg = document.createElement('div');
    msg.innerText = name + ' op finished.';
    dom.appendChild(msg);
}

function noopAlert(name) {
    alert(name + ' op finished.');
}

var gui = require('nw.gui');

function initContextMenu() {
    var menu = new gui.Menu();
    menu.append(new gui.MenuItem({label: 'Item A'}));
    menu.append(new gui.MenuItem({label: 'Item B'}));
    menu.append(new gui.MenuItem({type: 'separator'}));
    menu.append(new gui.MenuItem({label: 'Item C'}));

    menu.removeAt(1);

    for (var i = 0; i < menu.items.length; ++i) {
        console.log(menu.items[i]);
    }

    menu.append(new gui.MenuItem({
        label: 'Click me',
        click: function() {
            var element = document.createElement('div');
            element.appendChild(document.createTextNode('open kernel.org'));
            document.body.appendChild(element);
            var new_win = gui.Window.get(window.open('http://www.kernel.org'));
            setTimeout(function() {new_win.close();}, 2000);
        }
    }));
    document.body.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        menu.popup(ev.x, ev.y);
        return false;
    }, false);
}


var win = gui.Window.get();
var menubar = new gui.Menu({type: 'menubar'});
/*
var sub1 = new gui.Menu();
sub1.append(new gui.MenuItem({
    label: 'Text 11',
    click: function() {
        var element = document.createElement('div');
        element.appendChild(document.createTextNode('Text 11'));
        document.body.appendChild(element);
    }
}));

menubar.append(new gui.MenuItem({label: 'Sub1', submenu: sub1}));
menubar.append(new gui.MenuItem({label: 'Sub2', submenu: sub2}));
win.menu = menubar;
menu.items[0].click = function() {
    console.log('click');
};
console.log(process.cwd());
os = require('os');
console.log('Operation System:' + os.platform());
*/

function initMenubar() {
    var subMenu;
    var menuData = require('./menu').menuData;
    console.log(menuData);/*
    for (var sub in menuData) {
        if (!menuData.hasOwnProperty(sub)) {
            continue;
        }
        subMenu = new gui.Menu();
        for (var opt in menuData[sub]) {
            if (!menuData[sub].hasOwnProperty(opt)) {
                continue;
            }
            subMenu.append(new gui.MenuItem(menuData[sub]));
            console.log(subMenu.items[0]);
        }
        menubar.append(new gui.MenuItem({label: sub, submenu: subMenu}));
    }
    win.menu = menubar;*/
}

document.addEventListener('DOMContentLoaded', function() {
    initContextMenu();
    initMenubar();
});