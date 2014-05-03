var gui = require('nw.gui');
var win = gui.Window.get();
win.width = 1000;
win.height = 800;
var maximized = false;
// init the basic frame window, add minimize, maximize and close button
function initFrame() {
    var minify = document.getElementById('minimize');
    minify.addEventListener('click', function(e) {
        win.minimize();
    });
    var full = document.getElementById('full');
    full.addEventListener('click', function(e) {
        if (!maximized) {
            win.maximize();
            maximized = ! maximized;
        } else {
            win.unmaximize();
            maximized = ! maximized;
        }
    });
    var close = document.getElementById('close');
    close.addEventListener('click', function(e) {
        win.close();
    });
}
// init basic context menu
function initContextMenu() {
    var menu = new gui.Menu();
    menu.append(new gui.MenuItem({label: 'refresh'}));
    menu.append(new gui.MenuItem({label: 'temp'}));
    menu.append(new gui.MenuItem({label: 'stop'}));
    menu.append(new gui.MenuItem({label: 'property'}));
    menu.append(new gui.MenuItem({type: 'separator'}));
    menu.append(new gui.MenuItem({label: 'close'}));
    menu.removeAt(1);
    menu.append(new gui.MenuItem({
        type: 'normal',
        label: 'edit',
        icon: 'images/edit.png',
        click: function() {
            console.log('start edit.');
            alert('checked: ' + menu.items[6].checked);
        }
    }));
    menu.append(new gui.MenuItem({
        type: 'checkbox',
        label: 'test',
        checked: false
    }));
    menu.append(new gui.MenuItem({
        type: 'normal',
        label: 'debug',
        icon: 'images/pear.png',
        tooltip: 'debug the page',
        click: function() {
            win.showDevTools();
        }
    }));
    menu.items[4].click = function() {
        win.close();
    };

    document.body.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        menu.popup(e.x, e.y);
        //console.log(e);
        return false;
    });
}

document.addEventListener('DOMContentLoaded', function() {
    initFrame();
    initContextMenu();
    var alimama = document.getElementById('alimama');
    alimama.src = aliLinks['login'];
    alimama.addEventListener('load', function() {
        roam();
    });
});

window.addEventListener('load', function(e) {
    //loginAlimama(account);
});