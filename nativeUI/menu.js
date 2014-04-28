var gui = require('nw.gui');

function initMenu() {
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

var menuData = {
    file: {
        open: {
            label: 'open',
            type: 'normal',
            icon: 'images/email.png',
            click: function() {
                alert('open file ok.');
            }
        },
        save: {
            label: 'save',
            type: 'normal',
            icon: 'images/disk.png',
            click: function() {
                alert('save file ok.');
            }
        },
        'new': {
            label: 'new',
            type: 'normal',
            icon: 'images/banana.png',
            click: function() {
                alert('new file created ok.');
            }
        },
        writable: {
            label: 'writable',
            type: 'checkbox',
            click: function() {
                alert('file is ' + this.checked ? writable: unwritable);
            }
        }
    },
    edit: {
        open: {
            label: 'open',
            type: 'normal',
            icon: 'images/email.png',
            click: function() {
                alert('open file ok.');
            }
        },
        save: {
            label: 'save',
            type: 'normal',
            icon: 'images/disk.png',
            click: function() {
                alert('save file ok.');
            }
        },
        'new': {
            label: 'new',
            type: 'normal',
            icon: 'images/banana.png',
            click: function() {
                alert('new file created ok.');
            }
        },
        writable: {
            label: 'writable',
            type: 'checkbox',
            click: function() {
                alert('file is ' + this.checked ? writable: unwritable);
            }
        }
    }
};
var sub1 = new gui.Menu();
sub1.append(new gui.MenuItem({
    label: 'Text 11',
    click: function() {
        var element = document.createElement('div');
        element.appendChild(document.createTextNode('Text 11'));
        document.body.appendChild(element);
    }
}));
sub1.append(new gui.MenuItem({
    label: 'Text 12',
    click: function() {
        var element = document.createElement('div');
        element.appendChild(document.createTextNode('Text 12'));
        document.body.appendChild(element);
    }
}));

var sub2 = new gui.Menu();
sub2.append(new gui.MenuItem({
    label: 'Text 21',
    click: function() {
        var element = document.createElement('div');
        element.appendChild(document.createTextNode('Text 21'));
        document.body.appendChild(element);
    }
}));
sub2.append(new gui.MenuItem({
    label: 'Text 22',
    click: function() {
        var element = document.createElement('div');
        element.appendChild(document.createTextNode('Text 22'));
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