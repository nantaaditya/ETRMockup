var app = angular.module('adminTrainingApp', ['datatables', 'datatables.bootstrap']);
app.controller('adminTrainingCtrl', ['$scope', 'DTOptionsBuilder', 'DTColumnDefBuilder',
    function($scope, DTOptionsBuilder, DTColumnDefBuilder) {
        $scope.dtOptions = DTOptionsBuilder
            .newOptions()
            .withOption('lengthChange', false)
            .withBootstrap();
        $scope.adminHistoryEmployeeTable = function(dtInstance) {
            var datatableObj = dtInstance.DataTable;
            $scope.tableInstance = datatableObj;
        };

        $scope.data = [{
            name: "Fathan Mustaqim",
            position: "Senior developer",
            department: "IT",
            directSuperior: "Ifnu Bima",
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
            status_supperior_1:"yes",
            status_supperior_2:"yes",
            status_supperior_3:"no",
            status: "Draft"
        }];
    }
]);