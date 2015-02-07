// Here it renders

var React = require('react'),
 MessageBox = require('./MessageBox');
    var reactComponent = React.renderComponent(
      <MessageBox></MessageBox>,
      document.getElementById('app')
     );