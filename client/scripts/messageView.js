/**
 * Takes messages and changes it to HTML
 */
var MessageView = {
  /**
   * Create single message?
   * templates uses <%--objectProperty--%> to insert stuff
   * template returns a function, takes in the JSON object
   */
  render: _.template(`
      <div class="chat <%=roomname%>">
        <div class="username"><%=username%></div>
        <div><%=text%></div>
      </div>
    `)

};