 var React = require('react');
 var SubMsg = require('./SubMsg');

 // the main messagebox component and it is the owner of all other Component, It is also called top level component
    var MessageBox = React.createClass({


      deleteMessage: function(message){
          console.log("Deleting");
          var newMessages = _.without(this.state.messages,message); // lodash added
            console.log(newMessages);
          this.setState({
            messages: newMessages
          });
      },
    // Event Listener for Adding message
      handleAdd: function(e){
          var newMessage = this.refs.newMessage.getDOMNode().value;
          var newMessages = this.state.messages.concat([newMessage]);
          this.setState({
            messages: newMessages
          });
      },
    // InitialState of the Owner Component
      getInitialState : function()
      {
        return{
          isVisible: true,
          titleMessage: 'Hello , World Nishi',
          messages : [
                'It is been a while',
                'You came',
                'Now it is high time ',
                'I want to say you ',
                'Some thing you never heard'

          ]
        }

      },

      render: function(){
              var inlineStyles = {
                display: this.state.isVisible? 'block' : 'none',
                color:this.state.isVisible? 'red' : 'blue'
              };
              var subMessage = null;
              // mapping the string array
              var messages = this.state.messages.map(function(msg){
                return <SubMsg message={msg} onDelete = {this.deleteMessage}/> ;

              }.bind(this)); // we are binding the "this" component so that we can get the component else it will show undefined in the deleteMessage 


              return(
                  <div className="container jumbotron" style={inlineStyles}>
                    <h1>{this.state.titleMessage}</h1>
                    <input ref="newMessage" type="text" />
                    <button className="btn btn-primary" onClick={this.handleAdd}> Add</button>
                    {messages}
                  </div>
                );
      }
    });
 module.exports = MessageBox;