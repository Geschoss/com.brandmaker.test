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
        {selector: 'addUserFormView textfield[name=firstName] ',
            ref: 'addUserFormFirstName'},
        {selector: 'addUserFormView textfield[name=lastName]',
            ref: 'addUserFormLastName'},
        {selector: 'addUserFormView textfield[name=yearOfBirth]',
            ref: 'addUserFormYearOfBirth'},
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
            'userGridViewdbClick': {
                itemdblclick : this.editItem
            },
            'addUserFormView  button[action=save]': {
                click: this.onSaveUser
            }
        });
    },

    editItem : function(grid, record) {
        var view = Ext.widget('addUserFormView');
        view.down('form').loadRecord(record);
    },


    onSaveUser: function (button) {
        var me = this;
        var userModel = Ext.create('UserCatalog.model.UsersEntity');
        userModel.set(this.getAddUserFormView().down('form').getValues());
        userModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('UserStore').add(objAjax);
                me.getAddUserFormView().close();
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