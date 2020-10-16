var RoomsView = {
  //DOM element, addRoom button
  $button: $('#rooms button'),
  //DOM element room drop down
  $select: $('#rooms select'),

  /**
   * ?
   */
  initialize: function() {
    //Probably grab rooms from server and add to our HTML
  },
  /**
   * Add messages to the DOM
   */
  renderRoom: function(name) {
    // takes in room name and adds to the DOM dropdown select element
    this.$select.append('<option value =' + name + '>' + name + '</option>');
  }

};
