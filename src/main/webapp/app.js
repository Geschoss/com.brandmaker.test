Ext.require([
    'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.state.*',
    'Ext.form.*'
]);

Ext.application({
    name: 'UserCatalog',

    views: [
        'AddUserFormView',
        'UserGridView'
    ],
    controllers : [
        'UserController'
    ],

    stores : [
        'UserStore'
    ],

    launch: function () {
        new Ext.window.Window({
            width: 700,
            height: 400,
            title: 'Users',
            items: {
                xtype  : 'userGridView'
            },
            layout: 'fit',
            closable: false
        }).show();
    }
});