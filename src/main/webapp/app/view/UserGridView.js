Ext.define('UserCatalog.view.UserGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userGridView',
    width: 400,
    height: 300,
    frame: true,
    store:'UserStore',
    iconCls: 'icon-user',
    viewConfig:{
        markDirty:false
    },
    columns: [
        {
            text: 'ID',
            sortable: true,
            width: 30,
            dataIndex: 'id',
        },
        {
            text: 'Имя',
            sortable: true,
            dataIndex: 'firstName',
            flex : 1
        },
        {
            text: 'Фамилия',
            sortable: true,
            dataIndex: 'lastName',
            flex : 1
        },
        {
            text: 'Год рождения',
            sortable: true,
            dataIndex: 'yearOfBirth',
            flex : 1
        }
    ],
    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Добавить',
                    action: 'add',
                },
                '-',
                {
                    action: 'delete',
                    text: 'Удалить',
                    disabled: true
                }
            ]
        }
    ]
});