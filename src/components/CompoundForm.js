'use strict';

var React = require('react/addons');
//var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
//require('../styles/main.css');

var CompoundForm = React.createClass({
  getInitialState: function() {
    return {
      deposit: 0,
      term: 0
    };
  },
  updateInputs: function(event) {
    
    this.setState({[event.target.name] : [event.target.value]});
    this.props.compoundFormUpdate(event.target.name, event.target.value);
  },
  updateTerm: function(event) {
    this.setState({term : event.target.value});
    this.updateForm();
  },
  updateForm: function() {
    this.props.compoundFormUpdate({
      deposit: this.state.deposit,
      term: this.state.term
    });
  },
  render: function() {
    return (
      <form className="compound-form">
        <input type="number" name="deposit" onChange={this.updateInputs} className="compound-form__deposit" />
        <input type="number" name="term" onChange={this.updateInputs} className="compound-form__term" />
      </form>
    );
  }
});

module.exports = CompoundForm;
