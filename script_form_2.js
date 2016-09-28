$(document).ready(function(){

  var onChange = function(){
    var first_name = $('#first_name').val()
    var last_name = $('#last_name').val()

    var full_name = first_name + " " + last_name
    $('#full_name').html(full_name)
  }

  $('#nationality').change(function(data){
    var result = $("#nationality").find('option:selected').text();
    $('#nationalityresult').html(result)
  })

  $('input[name=gender]').change(function(data){
      var value = $('input[name=gender]:checked').val()
      $('#sexresult').html(value)
  })


  $('#last_name').change(onChange)
  $('#first_name').change(onChange)
})
