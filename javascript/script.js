$(document).ready(function() {
  $('.form-container').on('submit', function(event) {
    event.preventDefault();
    const $input = $('.form-container :input');
    if (!$input.val()) {
      const $error = `
      <h1 style="color:red;">you left the input field blank</h1>
      ` 
      $('#message').prepend($error)
    } else {
      $("h1").fadeOut(300);
      $("p").fadeOut(300);
      const $message = `
      <h1 style="color:red;">
        ${$input.val()}
      </h1>
      `
      $('#message').prepend($message)
      $('#submit').prop('disabled', true);
      $('.input').val('');
    }
  })

})