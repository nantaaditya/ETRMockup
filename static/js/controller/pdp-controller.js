var app = angular.module('pdpApp', ['datatables', 'datatables.bootstrap']);
app.controller('pdpCtrl', ['$scope', 'DTOptionsBuilder',
    function($scope, DTOptionsBuilder) {
        //competency
        $scope.iterator = [
            [0]
        ];
        $scope.competency = [];
        var iteratorIndex = 0;

        $scope.addCompetency = function() {
            $scope.iterator.push([0]);
            iteratorIndex++;
        }
        $scope.removeCompetency = function() {
            $scope.iterator.splice(iteratorIndex, 1);
            iteratorIndex--;
        }
        $scope.addItem = function(id) {
            var l = $scope.iterator[id].length;
            $scope.iterator[id].push(l);
        };
        $scope.removeItem = function(id, index) {
            $scope.iterator[id].splice(index, 1);
            console.log(index);
        }
        $scope.show = function() {
            console.log($scope.competency);
        }

        $scope.dtOptions = DTOptionsBuilder
            .newOptions()
            .withOption('lengthChange', false)
            .withBootstrap();
        $scope.pdpTable = function(dtInstance) {
            var datatableObj = dtInstance.DataTable;
            $scope.tableInstance = datatableObj;
        };
        $scope.filterYear = '';
        $scope.filterTable = function() {
            var query = $scope.filterYear;
            $scope.tableInstance.search(query).draw();
        };
        // $scope.competency = [];
        // $scope.competencyGroup = [];        

    }
]);