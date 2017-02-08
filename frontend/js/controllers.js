angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.swiper'])

    .controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
        $scope.template = TemplateService.changecontent("home"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Home"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.mySlides = [
            'frontend/img/banner/bg-home.jpg',
            'frontend/img/banner/bg-home.jpg',
            'frontend/img/banner/bg-home.jpg',
            'frontend/img/banner/bg-home.jpg'
        ];

    })

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("form"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Form"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.formSubmitted = false;

        $scope.submitForm = function (data) {
            console.log(data);
            $scope.formSubmitted = true;
        }
    })
    .controller('orientationCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("orientation"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("Orientation"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.imgSection = [{
            image: "frontend/img/orientation/ori-img-1.jpg",
            title: "Airway Management",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum dolor iure fugiat praesentium,ut repudiandae dolorum nobis, nemo tempora ullam quas odit qui autem assumenda molestias.Quos,quisquam, eligendi."
        }, {
            image: "frontend/img/orientation/ori-img-2.jpg",
            title: "Blood Test",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum dolor iure fugiat praesentium,ut repudiandae dolorum nobis, nemo tempora ullam quas odit qui autem assumenda molestias.Quos,quisquam, eligendi."
        }, {
            image: "frontend/img/orientation/ori-img-3.jpg",
            title: "Cardiology",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum dolor iure fugiat praesentium,ut repudiandae dolorum nobis, nemo tempora ullam quas odit qui autem assumenda molestias.Quos,quisquam, eligendi."
        }, {
            image: "frontend/img/orientation/ori-img-4.jpg",
            title: "ct surgery",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum dolor iure fugiat praesentium,ut repudiandae dolorum nobis, nemo tempora ullam quas odit qui autem assumenda molestias.Quos,quisquam, eligendi."
        }, {
            image: "frontend/img/orientation/ori-img-5.jpg",
            title: "Cardiology",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum dolor iure fugiat praesentium,ut repudiandae dolorum nobis, nemo tempora ullam quas odit qui autem assumenda molestias.Quos,quisquam, eligendi."
        }, {
            image: "frontend/img/orientation/ori-img-6.jpg",
            title: "ct surgery",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum dolor iure fugiat praesentium,ut repudiandae dolorum nobis, nemo tempora ullam quas odit qui autem assumenda molestias.Quos,quisquam, eligendi."
        }]
        console.log('$scope.imgSection ', $scope.imgSection);
        $scope.myArray = _.chunk($scope.imgSection, 2);
        console.log('$scope.myArray ', $scope.myArray);

        $scope.imgFootscetion = [{
            image: "frontend/img/orientation/switch-img-1.jpg",
            thumbnail: "advanced"
        }, {
            image: "frontend/img/orientation/switch-img-2.jpg",
            thumbnail: "cardiothoracic icu rotation"
        }, {
            image: "frontend/img/orientation/switch-img-3.jpg",
            thumbnail: "european diploma in intensice care preparation pack"
        }
            //  {
            //     image: "frontend/img/orientation/switch-img-1.jpg",
            //     thumbnail: "image2"
            // }, {
            //     image: "frontend/img/orientation/switch-img-2.jpg",
            //     thumbnail: "image3"
            // }
        ]
        $scope.footerArray = _.chunk($scope.imgFootscetion, 3);
    })


    .controller('icuOrientationCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
        $scope.template = TemplateService.changecontent("icu-orientation"); //Use same name of .html file
        $scope.menutitle = NavigationService.makeactive("ICU Orientation"); //This is the Title of the Website
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

    })
    .controller('headerctrl', function ($scope, TemplateService, $uibModal) {
        $scope.template = TemplateService;
        $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            $(window).scrollTop(0);
        });
        $.fancybox.close(true);
        console.log("in header");
        $scope.openSignupModal = function () {
            console.log("clla");
            $uibModal.open({
                animation: true,
                templateUrl: 'frontend/views/modal/signup.html',
                scope: $scope,
                size: 'lg',
                windowClass: 'modal-content-radi0'
            });
        };
    })

    .controller('languageCtrl', function ($scope, TemplateService, $translate, $rootScope) {

        $scope.changeLanguage = function () {
            console.log("Language CLicked");

            if (!$.jStorage.get("language")) {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                if ($.jStorage.get("language") == "en") {
                    $translate.use("hi");
                    $.jStorage.set("language", "hi");
                } else {
                    $translate.use("en");
                    $.jStorage.set("language", "en");
                }
            }
            //  $rootScope.$apply();
        };


    })

    ;