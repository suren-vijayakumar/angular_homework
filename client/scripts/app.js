var myApp = angular.module('myApp', []);

myApp.controller("WelcomeController", ['$scope', '$http',function($scope, $http){
    $scope.note= {};
    $scope.notes=[];
    $scope.heading = "Here is your message: ";

        $scope.getData = function () {
           return $http.get('/data').then(function (response) {

                $scope.note = {};
                $scope.notes = response.data;
                return response.data;

            });
        };

    $scope.updateMessage = function(note){
        console.log(note);
       $http.post('/data' ,note).then($scope.getData());

    };

}]);