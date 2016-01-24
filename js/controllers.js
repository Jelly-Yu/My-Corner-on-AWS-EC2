/**
 * Created by Iris on 1/24/2016.
 */

var animationControllers = angular.module('animationControllers', ['ngAnimate']);
animationControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
    $http.get('js/data.json').success(function(data){
        $scope.animations = data;
        $scope.animeOrder = 'name';
    });
}]);

animationControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('js/data.json').success(function(data){
        $scope.animations = data;
        $scope.whichItem = $routeParams.itemId;

        if($routeParams.itemId > 0){
            $scope.prevItem = Number($routeParams.itemId) - 1;
        }else{
            $scope.prevItem = $scope.animations.length-1;
        }

        if($routeParams.itemId < $scope.animations.length -1){
            $scope.nextItem = Number($routeParams.itemId) + 1;
        }else{
            $scope.nextItem = 0;
        }

    });
}]);