(function ()
{
    var app = angular.module('spa', ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider)
    {
        $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'mainController',
            })
            .when('/about', {
                templateUrl: 'pages/about.html',
                controller: 'aboutController',
            })
            .when('/contact', {
                templateUrl: 'pages/contact.html',
                controller: 'contactController',
            });
    });

    app.controller('mainController', function ($scope)
    {
        $scope.message = 'Hello, world!';
    });

    app.controller('aboutController', function ($scope)
    {
        $scope.message = 'All about me';
    });

    app.controller('contactController', function ($scope)
    {
        $scope.message = 'Contact me about all you stuff';
    });

})();