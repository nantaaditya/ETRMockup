var app = angular.module('reviewerApp', ['datatables', 'datatables.bootstrap']);
app.controller('reviewerCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnDefBuilder',
    function($scope, DTOptionsBuilder, DTColumnDefBuilder) {
        $scope.dtOptions = DTOptionsBuilder
            .newOptions()
            .withOption('lengthChange', false)
            .withBootstrap();
        $scope.dtColumnDefs = [
            DTColumnDefBuilder.newColumnDef(0).notSortable(),
            DTColumnDefBuilder.newColumnDef(6).notSortable()
        ];
        $scope.reviewTable = function(dtInstance) {
            var datatableObj = dtInstance.DataTable;
            $scope.tableInstance = datatableObj;
        };
        $scope.data = [{
                training_code: "1/GDN-HQ/Jan/17",
                training_topic: "Spring Framework",
                training_type: "Technical",
                training_description: "This course teach students how to build spring",
                training_venue: "-",
                vendor_name: "-",
                vendor_phone: "-",
                vendor_fax: "-",
                vendor_email: "-",
                based_on_pdp: "yes",
                development_plan: "Learn more about spring framework",
                date: "01 Jan 17 - 01 Feb 17",
                note: "-",
                files: "training_registration_info.pdf",
                status: "Draft"
            },
            {
                training_code: "2/GDN-HQ/Jan/17",
                training_topic: "Spring Framework",
                training_type: "Technical",
                training_description: "This course teach students how to build spring",
                training_venue: "-",
                vendor_name: "-",
                vendor_phone: "-",
                vendor_fax: "-",
                vendor_email: "-",
                based_on_pdp: "yes",
                development_plan: "Learn more about spring framework",
                date: "01 Jan 17 - 01 Feb 17",
                note: "-",
                files: "training_registration_info2.pdf",
                status: "Draft"
            }
        ];

    }
]);