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
            
            when('/staff', {
                templateUrl: 'views/staff/staff.html',
                controller: 'StaffCtrl'
            }).

            when('/council', {
                templateUrl: 'views/council/council.html',
                controller: 'CouncilCtrl'
            }).
                    
            when('/about', {
                templateUrl: 'views/about/about.html',
                controller: 'AboutCtrl'
            }).

            when('/mission', {
                templateUrl: 'views/mission/mission.html',
                controller: 'MissionCtrl'
            }).
                    
            when('/vision', {
                templateUrl: 'views/vision/vision.html',
                controller: 'VisionCtrl'
            }).
                
            when('/statute', {
                templateUrl: 'views/statute/statute.html',
                controller: 'StatuteCtrl'
            }).

            when('/payments', {
                templateUrl: 'views/payments/payments.html',
                controller: 'PaymentsCtrl'
            }).                

            when('/orders', {
                templateUrl: 'views/orders/orders.html',
                controller: 'OrdersCtrl'
            }).                

            when('/order1', {
                templateUrl: 'views/order1/order1.html',
                controller: 'Order1Ctrl'
            }). 

            when('/order2', {
                templateUrl: 'views/order2/order2.html',
                controller: 'Order2Ctrl'
            }). 
                    
            when('/events_schedule', {
                templateUrl: 'views/events_schedule/events_schedule.html',
                controller: 'EventsScheduleCtrl'
            }).                

            when('/contact', {
                templateUrl: 'views/contact/contact.html',
                controller: 'ContactCtrl'
            }).                

            when('/recruitment', {
                templateUrl: 'views/recruitment/recruitment.html',
                controller: 'RecruitmentCtrl'
            }).                
                
            when('/timetable', {
                templateUrl: 'views/timetable/timetable.html',
                controller: 'TimetableCtrl'
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


