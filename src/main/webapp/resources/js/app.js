'use strict';

var AngularSpringApp = {};

var App = angular.module('TodoApp', ['ui.bootstrap','TodoApp.filters', 'TodoApp.services', 'TodoApp.directives']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when('/todoes', {
        templateUrl: 'resources/templates/todoes.html',
        controller: TodoController
    });

    $routeProvider.when('/signup', {
        templateUrl: 'resources/templates/signup.html',
        controller: UserController
    });

    $routeProvider.when('/feedback', {
        templateUrl: 'resources/templates/feedback.html',
        controller: FeedbackController
    });
    
    $routeProvider.when('/downloads', {
        templateUrl: 'resources/templates/download.html',
        
    });
    
    $routeProvider.when('/contact', {
        templateUrl: 'resources/templates/contact.html',
        
    });



    $routeProvider.otherwise({redirectTo: '/signup'});
}]);
