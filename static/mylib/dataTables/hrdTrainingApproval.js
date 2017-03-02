function format ( d ) {
    // `d` is the original data object for the row
    return '<div class="row">'+
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
  //Approval
  $('.targetDiv').addClass('hidden');
  $('.showSingle').click(function(){
    $('.targetDiv').addClass('hidden');
    $('#div'+$(this).attr('target')).removeClass("hidden");
  });
  //DATATABLE
  $.fn.dataTable.ext.search.push(
  function( settings, data, dataIndex ) {
      var filter = $('#filterStatus').val();
      var status = data[5];
      if ( status.match(filter) || filter.match("All")){
          return true;
      }
      return false;
    }
  );
  var table = $('#approvalTable').DataTable({
      "ajax": "./dataHRD.txt",
      "columns": [
          {
              "className":      'details-control',
              "orderable":      false,
              "data":           null,
              "defaultContent": ''
          },
          { "data": "training_code" },
          { "data": "training_type" },
          { "data": "training_venue" },
          { "data": "date" },
          { "data": "status" },
          {
            "orderable": false,
            "data":      null,
            "defaultContent" : '<a href="#" data-toggle="modal" data-target="#modalNextStep" class="btn btn-success btn-flat"><i class="fa fa-check-circle-o"></i></a>'
          }
      ],
      "order": [[1, 'asc']]
  });
  $('#filterStatus').change( function() {
    table.draw();
  });
  $('#approvalTable tbody').on('click', 'td.details-control', function () {
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

  //DATEPICKER
  $('#startDate').datepicker();
  $('#endDate').datepicker();

  //DYNAMIC FILES
  var wrapper = $(".addFileWrapper");
  $(".btn-add").click(function(e){
    e.preventDefault();
    $(wrapper).append('<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12"><div class="form-group" id="addInputFile"><div class="input-group"><input type="file" class="form-control" name="fileTraining[]"/><div class="input-group-btn"><button type="button" class="btn btn-danger btn-remove"><i class="fa fa-minus"></i></button></div></div></div>');
    }
  );
  $(wrapper).on("click",".btn-remove", function(e){
    e.preventDefault();
    $("#addInputFile").remove();
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
