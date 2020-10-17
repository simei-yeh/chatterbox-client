var RoomsView = {
  //DOM element, addRoom button
  $button: $('#rooms button'),
  //DOM element room drop down
  $select: $('#rooms select'),

  /**
   * ?
   */
  initialize: function() {
    // add event listeners for adding rooms through "add" button and "select" dropdown
    this.$button.on("click", function() {
      Rooms.add();
    });

    this.$select.on("change", (event) => {
      //event = name of the room
      MessagesView.initialize(event.target.value);
    });
  },
  /**
   * Add messages to the DOM
   */
  renderRoom: function(name) {
    // takes in room name and adds to the DOM dropdown select element
    this.$select.append('<option value =' + name + '>' + name + '</option>');
  }

};
