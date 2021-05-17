$(document).ready(function () {
  // datepicke
  $(".date_picker").datepicker();

   // select2
   $(".select2").select2();


  // dropify
  $(".dropify").dropify();


  // blur form

  const loginClass = '.login_form .form-group input';

  $(loginClass).on("focus", function () {
    $(this).parent().addClass('up');
  });

$(loginClass).on("blur", function () {
  if ($(this).val()) {
      $(this).parent().addClass('up');
  }
  if (!$(this).val()) {
      $(this).parent().removeClass('up');
  }
});





// dataTable

if ($("html").attr("dir") == "rtl") {
  var lang = 'https://cdn.datatables.net/plug-ins/1.10.24/i18n/Arabic.json';
} else {
var lang = "";
}

  var table = $('.dataTable').DataTable( {
    "language": {
        "url": lang,
    },

      // "ajax": "../ajax/data/objects.txt",
      // "columns": [
      //     {
      //         "className":      'details-control',
      //         "orderable":      false,
      //         "data":           null,
      //         "defaultContent": ''
      //     },
      //     { "data": "name" },
      //     { "data": "position" },
      //     { "data": "office" },
      //     { "data": "salary" }
      // ],
      // "order": [[1, 'asc']]
  } );
   












 
    // Add event listener for opening and closing details
    $('.dataTable tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = table.row( tr );
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            tr.removeClass('shown');
        }
        else {
            // Open this row
            row.child( format(row.data()) ).show();
            tr.addClass('shown');
        }
    } );











































});