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
      messages: {
        first_name: "Enter your first name",
        last_name: {
          required: "Enter your last name",
          maxlength: "Too much character in your last name"
        }
      },

      submitHandler: function(form){
        form.submit();
      }
    }
  })
})
