App.module("Welcome", function (Welcome, App, Backbone, Marionette, $, _) {
    Welcome.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "welcome": "showWelcome"
        }
    });
    var API = {
        showWelcome: function() {
            Welcome.Controller.showWelcome();
        }
    };
    new Welcome.Router({
        controller: API
    });
    Welcome.Controller = {
        showWelcome: function () {
            var welcomeView = new Welcome.View({
            });

            App.mainRegion.show(welcomeView);
        }
    };
});