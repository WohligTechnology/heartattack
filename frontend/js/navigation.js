var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function () {
    var navigation = [{
        name: "icu orientation",
        classis: "active",
        anchor: "home",
        subnav: []
            // subnav: [{
            //     name: "Subnav1",
            //     classis: "active",
            //     anchor: "home"
            // }]
    }, {
        name: "primary exam",
        classis: "active",
        anchor: "form",
        subnav: []
    }, {
        name: "icu fellowship exam",
        classis: "active",
        anchor: "form",
        subnav: []
    }, {
        name: "edic",
        classis: "active",
        anchor: "form",
        subnav: []
    }, {
        name: "intensive care nursing",
        classis: "active",
        anchor: "form",
        subnav: []
    }, ];

    return {
        getnav: function () {
            return navigation;
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

    };
});