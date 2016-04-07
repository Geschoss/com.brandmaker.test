Ext.application({
    name: 'UsersCatalog',

    views: [
        'AddUserFormView',
        'UserCatalogView',
        'UserGridView'
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