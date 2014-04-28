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
        'delete': {
            label: 'delete',
            type: 'normal',
            icon: 'images/email.png',
            click: function () {
                alert('open file ok.');
            }
        },
        find: {
            label: 'find',
            type: 'normal',
            icon: 'images/disk.png',
            click: function () {
                alert('save file ok.');
            }
        },
        'cut': {
            label: 'cut',
            type: 'normal',
            icon: 'images/banana.png',
            click: function () {
                alert('new file created ok.');
            }
        },
        'paste': {
            label: 'paste',
            type: 'normal',
            icon: 'images/banana.png',
            click: function () {
                alert('new file created ok.');
            }
        },
        'split1': {
            type: 'separator'
        },
        savable: {
            label: 'savable',
            type: 'checkbox',
            click: function () {
                alert('file is ' + this.checked ? writable : unwritable);
            }
        }
    },
    view: {
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
    code: {
        'delete': {
            label: 'delete',
            type: 'normal',
            icon: 'images/email.png',
            click: function() {
                alert('open file ok.');
            }
        },
        find: {
            label: 'find',
            type: 'normal',
            icon: 'images/disk.png',
            click: function() {
                alert('save file ok.');
            }
        },
        'cut': {
            label: 'cut',
            type: 'normal',
            icon: 'images/banana.png',
            click: function() {
                alert('new file created ok.');
            }
        },
        'paste': {
            label: 'paste',
            type: 'normal',
            icon: 'images/banana.png',
            click: function() {
                alert('new file created ok.');
            }
        },
        'split1': {
            type: 'separator'
        },
        savable: {
            label: 'savable',
            type: 'checkbox',
            click: function() {
                alert('file is ' + this.checked ? writable: unwritable);
            }
        }
    },
    tools: {
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
    help: {
        'delete': {
            label: 'delete',
            type: 'normal',
            icon: 'images/email.png',
            click: function() {
                alert('open file ok.');
            }
        },
        find: {
            label: 'find',
            type: 'normal',
            icon: 'images/disk.png',
            click: function() {
                alert('save file ok.');
            }
        },
        'cut': {
            label: 'cut',
            type: 'normal',
            icon: 'images/banana.png',
            click: function() {
                alert('new file created ok.');
            }
        },
        'paste': {
            label: 'paste',
            type: 'normal',
            icon: 'images/banana.png',
            click: function() {
                alert('new file created ok.');
            }
        },
        'split1': {
            type: 'separator'
        },
        savable: {
            label: 'savable',
            type: 'checkbox',
            click: function() {
                alert('file is ' + this.checked ? writable: unwritable);
            }
        }
    }
};
exports = menuData;