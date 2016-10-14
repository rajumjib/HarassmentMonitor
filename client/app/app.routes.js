'use strict';
angMonitorManager.config(['$routeProvider', '$locationProvider', '$httpProvider', '$provide', function ($routeProvider, $locationProvider, $httpProvider, $provide) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.useXDomain = true;
    //$locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/client/app/components/home/views/landing.html',
            controller: 'homeController'
        })
        .when('/Home', {
            templateUrl: '/client/app/components/home/views/home.html',
            controller: 'homeController'
        })
        .when('/About', {
            templateUrl: '/client/app/components/home/views/about.html',
            controller: 'aboutController'
        })
        .when('/Login', {
            template: $('#viewLogin').html(),
            controller: 'authenticationController'
        })
        .when('/Relogin/:userEmail', {
            templateUrl: '/client/app/components/authentication/views/relogin.html',
            controller: 'authenticationController'
        })
        .when('/Register', {
            templateUrl: '/client/app/components/authentication/views/register.html',
            controller: 'authenticationController'
        })
        .when('/Error', {
            templateUrl: '/client/app/components/global/views/error.html'
        })
        .otherwise({
            redirectTo: '/Login'
        });

    //$httpProvider.interceptors.push('authorizationInterceptor');
    //$httpProvider.interceptors.push('httpInterceptor');
}]);
