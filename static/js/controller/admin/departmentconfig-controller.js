var app = angular.module('departmentConfigApp', ['datatables', 'datatables.bootstrap']);
app.controller('departmentConfigCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnDefBuilder',
    function($scope, DTOptionsBuilder, DTColumnDefBuilder) {
        $scope.dtOptions = DTOptionsBuilder
            .newOptions()
            .withOption('lengthChange', false)
            .withBootstrap();
        $scope.departmentConfigTable = function(dtInstance) {
            var datatableObj = dtInstance.DataTable;
            $scope.tableInstance = datatableObj;
        };
        $scope.filterYear = '';
        $scope.filterTable = function() {
            var query = $scope.filterYear;
            $scope.tableInstance.search(query).draw();
        };
        $scope.data = [{
                year: 2016,
                department: "IT",
                userApproval: [{ name: "nayan djadeja" }, { name: "kusumo" }],
                quota: 10
            },
            {
                year: 2017,
                department: "HR",
                userApproval: [{ name: "sandra kusuma" }, { name: "kusumo" }],
                quota: 0
            }
        ];
        $scope.print = function() {
            console.log($scope.user);
        }
    }
]);