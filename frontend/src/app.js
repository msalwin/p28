'use strict';

// Declare app level module which depends on views, and components
var p28AppControllers = angular.module('p28AppControllers', []);
var p28AppServices = angular.module('p28AppServices', ['ngResource']);
var p28AppSanitize = angular.module('p28AppSanitize', ['ngSanitize']);

var p28App = angular.module('p28App', [
  'ngRoute',
  'p28AppControllers',
  'p28AppServices',
  'p28AppSanitize',
  'ui.bootstrap',
]);

p28App.config(['$routeProvider', 
    function($routeProvider) {
        $routeProvider.
            when('/conception', {
                templateUrl: 'views/conception/conception.html',
                controller: 'ConceptionCtrl'
            }).
            
            when('/news', {
                templateUrl: 'views/news/news.html',
                controller: 'NewsCtrl'
            }).
            
            when('/about', {
                templateUrl: 'views/about/about.html',
                controller: 'AboutCtrl'
            }).

            when('/gallery_categ', {
                templateUrl: 'views/gallery_categ/gallery_categ.html',
                controller: 'GalleryCategCtrl'
            }).

            when('/gallery_list/:id_categ', {
                templateUrl: 'views/gallery_list/gallery_list.html',
                controller: 'GalleryListCtrl'
            }).
                    
            when('/gallery_details/:id_gal', {
                templateUrl: 'views/gallery_details/gallery_details.html',
                controller: 'GalleryDetailsCtrl'
            }).

            otherwise({
                redirectTo: '/about'
            });
    }]);


