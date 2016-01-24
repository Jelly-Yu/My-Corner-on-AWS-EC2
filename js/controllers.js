/**
 * Created by Iris on 1/24/2016.
 */

var animeControllers = angular.module('animationControllers', ['ngAnimate']);
animeControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
    $http.get().success(function(data){

    });
}]);

animeControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get().success(function(data){

    });
}]);