Ext.define('UserCatalog.model.UsersEntity', {
    extend: 'Ext.data.Model',
    fields: [{
        name: 'id',
        type: 'int',
        useNull: true,
        defaultValue: 0
    }, 'firstName', 'lastName', 'yearOfBirth'],
   
});