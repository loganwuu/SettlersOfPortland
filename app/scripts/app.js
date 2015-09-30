angular.module('SettlersOfPortland', []);

settlers.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    })
    .state('sign-in', {
        url: "/sign-in",
        templateUrl: "partials/sign-in.html",
        controller: "StudentController"
    })
    .state('presence', {
        url: "/presence",
        templateUrl: "partials/presence.html",
        controller: 'StudentController'
    });
});
