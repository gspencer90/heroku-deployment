angular.module("Heroku", [
    'ngRoute',
    'Heroku.controllers'
])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .otherwise({
        redirectTo: '/'
    })
}])