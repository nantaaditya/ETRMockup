function format ( d ) {
    // `d` is the original data object for the row
    return '<div class="row">'+
      '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
        '<table class="table">'+
          '<tr>'+
            '<th>Training Code</th>'+
            '<th>Topic</th>'+
            '<th>Date</th>'+
            '<th>Status</th>'+
          '</tr>'+
          '<tr>'+
            '<td>'+d.training_code+'</td>'+
            '<td>'+d.training_topic+'</td>'+
            '<td>'+d.date+'</td>'+
            '<td>'+d.status+'</td>'+
          '</tr>'+
        '</table>'+
      '</div>'+
      '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+
        '<ul class="timeline">'+
          '<li class="time-label">'+
            '<span class="bg-blue">01 Feb 2017</span>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-file bg-green" title="Draft"></i>'+
            '<br>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-user bg-gray" title="Direct Superior Approval"></i>'+
            '<br>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-user bg-gray" title="HR Approval"></i>'+
            '<br>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-user bg-gray" title="Supperior Approval"></i>'+
            '<br>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-registered bg-gray" title="Registration"></i>'+
            '<br>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-child bg-gray" title="Training Completion"></i>'+
            '<br>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-feed bg-gray" title="Feedback"></i>'+
            '<br>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-check bg-gray" title="Completion"></i>'+
            '<br>'+
          '</li>'+
        '</ul>'+
      '</div>'+
      '<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">'+
        '<table>'+
          '<tr>'+
            '<th>Training Type</th>'+
            '<td>'+d.training_type+'</td>'+
          '</tr>'+
          '<tr>'+
            '<th>Description</th>'+
            '<td>'+d.training_description+'</td>'+
          '</tr>'+
          '<tr>'+
            '<th>Vendor Name</th>'+
            '<td>'+d.vendor_name+'</td>'+
          '</tr>'+
          '<tr>'+
            '<th>Vendor Contact</th>'+
            '<td> Phone : '+d.vendor_phone+'<br/> Fax : '+d.vendor_fax+'<br/> Email : '+d.vendor_email+'</td>'+
          '</tr>'+
          '<tr>'+
            '<th>Based on PDP</th>'+
            '<td>'+d.based_on_pdp+'</td>'+
          '</tr>'+
          '<tr>'+
            '<th>Development Plan</th>'+
            '<td>'+d.development_plan+'</td>'+
          '</tr>'+
        '</table>'+
      '</div>'+
      '<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">'+
        '<table>'+
          '<tr>'+
            '<th>Note</th>'+
            '<td> : '+d.note+'</td>'+
          '</tr>'+
          '<tr>'+
            '<th>File</th>'+
            '<td> : <a href="">'+ d.files+'</a></td>'+
          '</tr>'+
        '</table>'+
      '</div>'+
    '</div>';
}

  $(document).ready(function(){
    //DATATABLE
    // $.fn.dataTable.ext.search.push(
    // function( settings, data, dataIndex ) {
    //     var filter = $('#filterDepartment').val();
    //     var status = data[5];
    //     if ( status.match(filter) || filter.match("All")){
    //         return true;
    //     }
    //     return false;
    //   }
    // );
    var table = $('#historyEmployeeTable').DataTable({
        "ajax": "./dataHRD.txt",
        "columns": [
            {
                "className":      'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "employee_name" },
            { "data": "employee_position" },
            { "data": "employee_department" },
            { "data": "employee_direct_supperior" }
        ],
        "columnDefs": [{
          "defaultContent": "No Data",
          "targets": "_all"
        }],
        "order": [[1, 'asc']]
    });
    $('#filterDepartment').change( function() {
      table.draw();
    });
    $('#historyEmployeeTable tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
        if ( row.child.isShown() ) {
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            row.child(format(row.data())).show();
            tr.addClass('shown');
        }
    });

    //TRAINING TYPE
    $('#trainingType').on('change', function() {
      if(this.value=="other"){
        $("#trainingTypeHide").removeClass("hide");
      }else{
        $("#trainingTypeHide").addClass("hide");
      }
    });
  });
