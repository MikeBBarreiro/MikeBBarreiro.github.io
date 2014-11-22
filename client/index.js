(function(){
  'use strict';
  var index = angular.module('mike', ['ngRoute']);

  //Angular Routes
  index.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
    .when('/', {templateUrl:'index.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();
