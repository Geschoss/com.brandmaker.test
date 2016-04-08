Ext.define('UsersEntity', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'firstName',
        type: 'string'
    }, {
        name: 'lastName',
        type: 'string'
    }, {
        name: 'yearOfBirth',
        type: 'int'
    }]
});


var RESTmembers = Ext.create('Ext.data.Store', {
    autoLoad: true,
    autoSync: true,
    model: 'UsersEntity',
    proxy: {
        type: 'rest',
        url: '/service',
        reader: {
            type: 'json',
            root: 'users',
            totalProperty: 'success'
        }
    }
});


Ext.onReady(function () {
    var grid =  Ext.create('Ext.grid.Panel', {
        renderTo: document.body,
        store: RESTmembers,
        width: 800,
        height: 400,
        title: 'Users',
        selType: 'rowmodel',
        columns: [
            {
                text: 'id',
                width: 30,
                dataIndex: 'id'
            },
            {
                text: 'firstName',
                width: 150,
                dataIndex: 'firstName',
            },
            {
                text: 'lastName',
                flex: 1,
                dataIndex: 'lastName'
            },
            {
                text: 'yearOfBirth',
                flex: 1,
                dataIndex: 'yearOfBirth'
            }
        ]
    });

});