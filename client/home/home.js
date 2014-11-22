(function(){
  'use strict';

  var home = angular.module('mike');

  home.controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = 'Home Page';
  }]);
})();
