Ext.define('UserCatalog.controller.UserController', {
    extend: 'Ext.app.Controller',

    refs: [
        {selector: 'userGridView',
            ref: 'userGridView'},
        {selector: 'userGridView',
            ref: 'userGridViewdbClick'},
        {selector: 'userGridView button[action="add"]',
            ref: 'userGridAdd'},
        {selector: 'userGridView button[action="delete"]',
            ref: 'userGridDelete'},
        {selector: 'addUserFormView',
            ref: 'addUserFormView'},
        {selector: 'addUserFormView button[action=save]',
            ref: 'addUserFormSave'}
    ],

    init: function () {
        this.control({
            'userGridView  button[action=add]': {
                click: this.onAddUser
            },
            'userGridView  button[action=delete]': {
                click: this.onDelUser
            },
            'userGridView': {
                cellclick: this.onLineGrid
            },
            'addUserFormView  button[action=save]': {
                click: this.onSaveUser
            }
        });
    },


    onSaveUser: function (button) {
        var userModel = Ext.create('UserCatalog.model.UsersEntity');
        userModel.set(this.getAddUserFormView().down('form').getValues());
        userModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('UserStore').add(objAjax);
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'Ошибка!',
                    msg: 'Ошибка записи в базу данных',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }

        });
    },

    onAddUser: function () {
        Ext.widget('addUserFormView');
    },

    onDelUser: function () {
        var sm = this.getUserGridView().getSelectionModel();
        var rs = sm.getSelection();
        this.getUserGridView().store.remove(rs[0]);
        this.getUserGridView().store.commitChanges();
        this.getUserGridDelete().disable();
    },

    onLineGrid: function () {
        this.getUserGridDelete().enable();
    }

});