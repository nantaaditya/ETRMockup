var app = angular.module('employeeApp', ['datatables', 'datatables.bootstrap']);
app.controller('employeeCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnDefBuilder',
    function($scope, DTOptionsBuilder, DTColumnDefBuilder) {
        $scope.dtOptions = DTOptionsBuilder
            .newOptions()
            .withOption('lengthChange', false)
            .withBootstrap();
        $scope.employeeTable = function(dtInstance) {
            var datatableObj = dtInstance.DataTable;
            $scope.tableInstance = datatableObj;
        };

        $scope.data = [{
            id: 12345,
            name: "Fathan Mustaqim",
            position: "senior developer",
            department: "IT",
            directSuperior: "Ifnu Bima",
            quota: 10
        }];
    }
]);