var FormView = {

  $form: $('form'),
  /**
   * Calls handleSubmit() when submit is clicked
   * initalize creates a 'submit' event listener on the form
   */
  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },
  /**
   * Executed when submit is clicked
   */
  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};