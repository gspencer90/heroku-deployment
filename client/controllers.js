angular.module("Heroku.controllers", [])
.controller('HomeController', ['$scope', function($scope) {
    $scope.message = 'Hello from Angular';
}])