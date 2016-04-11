Ext.application({
    name: 'UserCatalog',

    views: [
        'AddUserFormView',
        'UserCatalogView',
        'UserGridView'
    ],
    controllers : [
        'UserController'
    ],

    stores : [
        'UserStore'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype  : 'userCatalogView'
            }
        });
    }
});