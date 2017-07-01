var app = angular.module('globalConfigApp', ['datatables', 'datatables.bootstrap']);
app.controller('globalConfigCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnDefBuilder',
    function($scope, DTOptionsBuilder, DTColumnDefBuilder) {
        $scope.dtOptions = DTOptionsBuilder
            .newOptions()
            .withOption('lengthChange', false)
            .withBootstrap();
        $scope.globalConfigTable = function(dtInstance) {
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
                trainingBudget: 15000000000,
                quota: 10,
                status: false,
            },
            {
                year: 2017,
                trainingBudget: 25000000000,
                quota: 0,
                status: true
            }
        ];

    }
]);