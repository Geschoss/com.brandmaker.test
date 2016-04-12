Ext.define('UserCatalog.model.UsersEntity', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int',
            useNull: true,
            defaultValue: 0
        },
        {
            name: 'birthday',
            type: 'date',
            dateFormat: 'Y-m-d'
        },
        'firstName', 'lastName'
    ],
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