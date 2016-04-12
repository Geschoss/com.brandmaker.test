Ext.define('UserCatalog.view.AddUserFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addUserFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'numberfield',
                    name: 'id',
                    fieldLabel: 'id',
                    hidden: true,
                },
                {
                    xtype: 'textfield',
                    name: 'firstName',
                    fieldLabel: 'Имя',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'lastName',
                    fieldLabel: 'Фамилия',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'datefield',
                    name: 'birthday',
                    fieldLabel: 'День рождения',
                    value: new Date(),
                    allowBlank: false,
                    dateFormat: 'Y-m-d',
                    blankText: 'Это поле должно быть заполнено'

                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Сохранить',
            action: 'save',
            handler: function () {
                this.up('window').close();
            }
        },
        {
            text: 'Отменить',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});