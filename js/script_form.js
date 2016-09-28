$(document).ready(function(){
  $('#datepicker').datepicker();

  $('.form_information').validate({
    rules: {
      first_name: 'required',
      last_name: {
        required: true,
        maxlength: 15,
      },
      phone_number: {
        required: true,
        number: true,
      },
      start_date: 'required',
      year_old: {
        required: true,
        min: 15,
        max: 150,
      },
      submitHandler: function(form){
        form.submit();
      }
    }
  })
})
