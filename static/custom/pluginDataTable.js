function format ( d ) {
    // `d` is the original data object for the row
    return
    '<div class="row">'+
      '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+
        '<ul class="timeline">'+
          '<li class="time-label">'+
            '<span class="bg-blue">01 Feb 2017</span>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-file bg-green"></i>'+
            '<div class="timeline-item">'+
              '<h3 class="timeline-header text-aqua">Draft</h3>'+
              '<div class="timeline-body">'+
                '<p class="text-center">APPROVED</p>'+
              '</div>'+
            '</div>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-user bg-gray"></i>'+
            '<div class="timeline-item">'+
              '<h3 class="timeline-header text-aqua">Direct Superior Approval</h3>'+
              '<div class="timeline-body">'+
                '<p class="text-center"><i class="fa fa-spinner fa-spin"></i></p>'+
              '</div>'+
            '</div>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-user bg-gray"></i>'+
            '<div class="timeline-item">'+
              '<h3 class="timeline-header text-aqua">HR Approval</h3>'+
              '<div class="timeline-body">'+
                '<p class="text-center"><i class="fa fa-spinner fa-spin"></i></p>'+
              '</div>'+
            '</div>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-user bg-gray"></i>'+
            '<div class="timeline-item">'+
              '<h3 class="timeline-header text-aqua">Superior Approval</h3>'+
              '<div class="timeline-body">'+
                '<p class="text-center"><i class="fa fa-spinner fa-spin"></i></p>'+
              '</div>'+
            '</div>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-registered bg-gray"></i>'+
            '<div class="timeline-item">'+
              '<h3 class="timeline-header text-aqua">Registration</h3>'+
              '<div class="timeline-body">'+
                '<p class="text-center"><i class="fa fa-spinner fa-spin"></i></p>'+
              '</div>'+
            '</div>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-child bg-gray"></i>'+
            '<div class="timeline-item">'+
              '<h3 class="timeline-header text-aqua">Training Completion</h3>'+
              '<div class="timeline-body">'+
                '<p class="text-center"><i class="fa fa-spinner fa-spin"></i></p>'+
              '</div>'+
            '</div>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-feed bg-gray"></i>'+
            '<div class="timeline-item">'+
              '<h3 class="timeline-header text-aqua">Feedback</h3>'+
              '<div class="timeline-body">'+
                '<p class="text-center"><i class="fa fa-spinner fa-spin"></i></p>'+
              '</div>'+
            '</div>'+
          '</li>'+
          '<li>'+
            '<i class="fa fa-check bg-gray"></i>'+
            '<div class="timeline-item">'+
              '<h3 class="timeline-header text-aqua">Completion</h3>'+
              '<div class="timeline-body">'+
                '<p class="text-center"><i class="fa fa-spinner fa-spin"></i></p>'+
              '</div>'+
            '</div>'+
          '</li>'+
          '<li class="time-label">'+
            '<span class="bg-blue">'+
              '28 Feb 2017'+
            '</span>'+
          '</li>'+
        '</ul>'+
      '</div>'+
      '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">'+
        '<table>'+
          '<tr>'+
            '<th>Training Type</th>'+
            '<td>'+d.training_type+'</td>'+
          '</tr>'+
          '<tr>'+
            '<th>Training Description</th>'+
            '<td>'+d.training_description+'</td>'+
          '</tr>'+
          '<tr>'+
            '<th>Vendor Name</th>'+
            '<td>'+d.vendor_name+'</td>'+
          '</tr>'+
          '<tr>'+
            '<th>Vendor Contact</th>'+
            '<td>'+d.vendor_phone+'<br/>'+d.vendor_fax+'<br/>'+d.vendor_email+'</td>'+
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
      '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">'+
        '<table>'+
          '<tr>'+
            '<th>Note</th>'+
            '<td>'+d.note+'</td>'+
          '</tr>'+
          '<tr>'+
            '<th>Additional File</th>'+
            '<td>'+d.files+'</td>'+
          '</tr>'+
        '</table>'+
      '</div>'+
    '</div>'+
    '</div>';
}
