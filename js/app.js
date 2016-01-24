/**
 * Created by Iris on 1/24/2016.
 */
var myApp = angular.module('myApp', [
    'ngRoute',
    'animationControllers'
]);

myApp.config(['$router', function($router){
    $router.when('/list', {
        templateUrl: 'partials/list.html',
        controller:'ListController'
    }).when('/details/:itemId',{
        templateUrl: 'partials/details.html',
        controller:'DetailsController'
    }).otherwise({
        redirectTo:'/list'
    });
}]);