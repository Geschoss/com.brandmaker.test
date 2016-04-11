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
                    xtype: 'textfield',
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
                    xtype: 'textfield',
                    name: 'yearOfBirth',
                    fieldLabel: 'Год рождения',
                    regex: /^([0-9]{1,20})*$/,
                    regexText: 'Год должен состоять из цифр',
                    allowBlank: false,
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