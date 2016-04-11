Ext.define('UserCatalog.view.UserGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.userGridView',
    store:'UserStore',
    columns: [
        {
            text: 'ID',
            sortable: true,
            width: 30,
            flex: 1,
            dataIndex: 'id',
        },
        {
            text: 'Имя',
            sortable: true,
            dataIndex: 'firstName',
            flex : 1,
            field: {
                xtype: 'textfield'
            }
        },
        {
            text: 'Фамилия',
            sortable: true,
            dataIndex: 'lastName',
            flex : 1,
            field: {
                xtype: 'textfield'
            }
        },
        {
            xtype: 'datecolumn',
            header: 'День рождения',
            dataIndex: 'birthday',
            field: {
                xtype: 'datefield',
                dateFormat: 'Y-m-d'
            }
        }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Добавить',
                    action: 'add'
                },
                '-',
                {
                    text: 'Удалить',
                    action: 'delete',
                    disabled: true
                }
            ]
        }
    ],
    plugins: Ext.create('Ext.grid.plugin.RowEditing', {
        listeners: {
            cancelEdit: function(rowEditing, context) {
                if (context.record.phantom) {
                    store.remove(context.record);
                }
            }
        }
    }),
    renderTo: Ext.getBody()
});