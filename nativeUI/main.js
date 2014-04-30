var op = require('./operation.js');
var gui = require('nw.gui');

var win = gui.Window.get();
var menubar = new gui.Menu({type: 'menubar'});

var tray;
var hidden = false;

function testApp() {
    var app = gui.App;
    console.log(app.argv);
    console.log(app.fullArgv);
    console.log(app.dataPath);
    console.log(app.manifest);
}

function initTray() {
    tray = new gui.Tray({
        title: 'Tray',
        tooltip: 'just a test',
        icon: 'email.png'
    });
    var menu = new gui.Menu();
    menu.append(new gui.MenuItem({
        type: 'normal',
        label: 'hide/show',
        click: function() {
          /*  if (hidden) {
                win.show();
            } else {
                win.hide();
            }*/
            win[hidden ? 'show' : 'hide']();
            hidden = !hidden;
        }
    }));
    menu.append(new gui.MenuItem({
        type: 'checkbox',
        label: 'log it'
    }));
    tray.menu = menu;
}

function initContextMenu() {
    var menu = new gui.Menu();
    menu.append(new gui.MenuItem({label: 'Item A'}));
    menu.append(new gui.MenuItem({label: 'Item B'}));
    menu.append(new gui.MenuItem({type: 'separator'}));
    menu.append(new gui.MenuItem({label: 'Item C'}));

    menu.removeAt(1);
/*
    for (var i = 0; i < menu.items.length; ++i) {
        console.log(menu.items[i]);
    }
*/
    menu.append(new gui.MenuItem({
        label: 'show kernel',
        click: function() {
            var element = document.createElement('div');
            element.appendChild(document.createTextNode('open kernel.org'));
            document.body.appendChild(element);
            var new_win = gui.Window.get(window.open('http://www.kernel.org'));
            setTimeout(function() {new_win.close();}, 6000);
        }
    }));
    menu.append(new gui.MenuItem({
        label: 'Debug',
        click: function() {
            win.showDevTools();
        }
    }));

    document.body.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        menu.popup(ev.x, ev.y);
        return false;
    }, false);
}

// init window toolbar
function initMenubar() {
    var subMenu, i;
    var menu = require('./menu.js');
    var menuData = menu.data();
    //console.log('menuData.file: ' + menuData.file);
    for (var sub in menuData) {
        if (!menuData.hasOwnProperty(sub)) {
            continue;
        }
        i = 0;
        //console.log(menuData[sub]);
        subMenu = new gui.Menu();
        for (var opt in menuData[sub]) {
            if (!menuData[sub].hasOwnProperty(opt)) {
                continue;
            }
            subMenu.append(new gui.MenuItem(menuData[sub][opt]));
            if (sub == 'file' && opt == 'open') {
                subMenu.items[i].click = function() {
                    var file = document.getElementById('file');
                    //console.log(file);
                    file.click();
                };
                i++;
                continue;
            }
            if (sub == 'view' && opt == 'display') {
                subMenu.items[i].click = function() {
                    var file = document.getElementById('open');
                    file.addEventListener('change', function(e) {
                        var fs = require('fs');
                        console.log(this.value);
                        fs.readFile(this.value, 'utf8', function(e, d) {
                            console.log(d);
                            var dom = document.getElementsByTagName('body')[0];
                            op.noopDomMsg(d, dom);
                        });
                    });
                    var openFile = document.getElementById('open');
                    openFile.click();
                };
                i++;
                continue;
            }
            subMenu.items[i++].click = function() {
                var dom = document.getElementsByTagName('body')[0];
                op.noopDomMsg(this.label, dom);
                //op.noopAlert(this.label);
            };
            //console.log(subMenu.items[0]);
        }
        menubar.append(new gui.MenuItem({label: sub, submenu: subMenu}));
    }
    //console.log('reach end.');
    win.menu = menubar;
}

function initFileOpen() {
    var button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', function(event) {
        var file = document.getElementById('file');
        file.click();
        console.log(event.target.value);
    });
    var file = document.getElementById('file');
    file.addEventListener('change', function(event) {
        var body = document.getElementsByTagName('body')[0];
        var msg = document.createElement('div');
        msg.innerHTML = this.value.split(';').join('<br />');
        body.appendChild(msg);
        console.log(this.value);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initContextMenu();
    initMenubar();
    testApp();
    initTray();
    initFileOpen();
});