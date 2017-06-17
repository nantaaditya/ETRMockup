var app = angular.module('loginApp', []);
app.controller('loginCtrl', function($scope) {
    $scope.error = false;
    $scope.login = function() {
        $scope.error = true;
    }
});