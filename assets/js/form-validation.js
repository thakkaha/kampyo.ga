// Form validation - register form
	toastr.options = {"positionClass": "toast-top-full-width"};
    $('.form-register').validate({
      messages: {
        fullname: "Please enter your fullname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        confirmPassword: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long",
          equalTo: "Please enter the same password as above"
        },
        email: "Please enter a valid email address"
      },      
      submitHandler: function(form) {
        var $this = $(form);
        $.ajax({
          url: $this.attr('action'),
          type: 'POST',
          data: $this.serialize(),
        })
        .done(function(msg) {
          toastr.success('Thank you for signing up. Expect to hear from us soon!');
          $this[0].reset();
        })
        .fail(function() {
          toastr.error('An error occurred. Please try again later.');
        });
      }      
    });
