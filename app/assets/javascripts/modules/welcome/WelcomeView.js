App.module("Welcome", function (Welcome, App, Backbone, Marionette, $, _) {
    var welcomeTpl = JST['templates/welcome/welcome-template'];

    Welcome.View = Backbone.Marionette.ItemView.extend({
        template: welcomeTpl,
        className: 'welcome'
    });
});