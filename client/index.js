(function(){
  'use strict';
  var index = angular.module('dave', ['ngRoute']);

  //Angular Routes
  index.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider){
    $routeProvider
    .when('/', {templateUrl:'home/index.html', controller:'HomeCtrl'})
    .otherwise({redirectTo:'/'});
  }]);
})();
