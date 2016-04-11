Ext.define('UserCatalog.store.UserStore', {
    extend: 'Ext.data.Store',
    requires : [
        'UserCatalog.model.UsersEntity'
    ],
    model: 'UserCatalog.model.UsersEntity',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: '/BrandMakerTest/rest/service',
            read: '/BrandMakerTest/rest/service',
            destroy: '/BrandMakerTest/rest/service/delete',
            update: '/BrandMakerTest/rest/service'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});