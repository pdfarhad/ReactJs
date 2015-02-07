  var React = require('react');

  // CHild COmponent
     var SubMsg = React.createClass({
        

    // It is property so it has no function 
      propTypes : {
        message: React.PropTypes.string.isRequired
      },

      handleDelete: function(e){
          this.props.onDelete(this.props.message)
      },
      getDefaultProps: function()
        {
          return{
              message: "It is good to see you "
          }

        },
      render: function(){

        return(  // Cant multiple things, that is why we have to wrap it with a div
          <div>
             {this.props.message}
            <button className="btn btn-danger" onClick={this.handleDelete} >X</button>
          </div>
          );
      }
    });
module.exports = SubMsg;