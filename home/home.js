(function(){
  'use strict';

  var home = angular.module('dave');

  home.controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = 'Home Page';
  }]);
})();
