var app = angular.module('pdpApp', ['datatables', 'datatables.bootstrap']);
app.controller('pdpCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnDefBuilder',
    function($scope, DTOptionsBuilder, DTColumnDefBuilder) {
        //PDP ITEM
        // $scope.competency = [];
        // $scope.pdpItems = [];
        // $scope.activity = [];
        // $scope.purpose = [];
        // $scope.planningStep = [];
        // $scope.pdpItem = {
        //     pdpCode: null,
        //     pdpItemCode: null,
        //     competencyGroup: $scope.competencyGroup,
        //     competency: $scope.competency[competencyGroup],
        //     activity: $scope.activity[competencyGroup],
        //     purpose: $scope.purpose[competencyGroup],
        //     planningStep: $scope.planningStep[competencyGroup],
        //     selected: false
        // };
        //iterator competency
        // $scope.iterator = [];
        // //iterator activity
        // $scope.item = [

        // ];
        // var competencyGroup = 0;
        // $scope.addCompetency = function() {
        //     $scope.iterator.push(competencyGroup);
        //     console.log($scope.iterator);
        //     competencyGroup++;
        // };
        // $scope.addItem = function(id) {
        //     $scope.item.push($scope.item.length);
        // };
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
        }
        $scope.show = function() {
            console.log($scope.competency);
        }

        $scope.dtOptions = DTOptionsBuilder
            .newOptions()
            .withOption('lengthChange', false)
            .withBootstrap();
        $scope.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(5).notSortable()
        ];
        $scope.pdpTable = function(dtInstance) {
            var datatableObj = dtInstance.DataTable;
            $scope.tableInstance = datatableObj;
        };
        $scope.filterYear = '';
        $scope.filterTable = function() {
            var query = $scope.filterYear;
            $scope.tableInstance.search(query).draw();
        };

    }
]);