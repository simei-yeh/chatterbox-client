var MessagesView = {
  /**
   * div DOM element
   */
  $chats: $('#chats'),

  /*
   * Function used callback to parse through message and call render in messageView
   * Arguments: data obtained from ajax, roomname obtained from initialize
   */
  checkRooms: function(data, roomname = null) {
    for (let message of data.results) {
      //this ==== messaageView
      //if roomname is null, renders all messages
      //otherwise, render messages with specified roomname
      if (roomname === null) {
        MessagesView.renderMessage(message);
      } else if (data["roomname"] === roomname) {
        MessagesView.renderMessage(message);
      }
    }
  },
  /*
   * Used to issue the GET call inside of parse.js and call checkRooms to parse the data
   */
  initialize: function(roomname = null) {
    // //takes in a roomname. If no roomname then default val = null
    // //loop through all data and render each message
    var callback = function(input) {
      this.checkRooms(input, roomname);
    };
    Parse.readAll(callback.bind(this));
  },


  /**
   * Add message to the DOM
   */
  renderMessage: function(message) {
    //Insert the message into the HTML template
    //debugger;
    var html = MessageView.renderHelper(message);
    //Append the message to the chat
    this.$chats.append(html);
  }
};
