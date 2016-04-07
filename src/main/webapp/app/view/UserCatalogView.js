Ext.define('UsersCatalog.view.UserCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.userCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'userGridView',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">Каталог пользователей</font></center></div>',
            region: 'north',
            height: 80
        }
    ],
    renderTo: Ext.getBody()
});