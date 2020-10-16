var MessagesView = {
  /**
   * div DOM element
   */
  $chats: $('#chats'),

  /**
   * ?
   */
  initialize: function() {
  },
  /**
   * Add message to the DOM
   */
  renderMessage: function(message) {
    //Insert the message into the HTML template
    //debugger;
    var html = MessageView.render(message);
    //Append the message to the chat
    this.$chats.append(html);
  }
};