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
  updateDeposit: function(event) {

    this.setState({deposit : event.target.value});
    this.updateForm();
  },
  updateTerm: function(event) {
    this.setState({term : event.target.value});
    this.updateForm();
  },
  updateForm: function() {
    this.props.compoundFormUpdate({
      deposit: this.state.deposit,
      term: this.state.term
    })
  },
  render: function() {
    return (
      <form className="compound-form">
        <input type="number" onChange={this.updateDeposit} className="compound-form__deposit" />
        <input type="number" onChange={this.updateTerm} className="compound-form__term" />
      </form>
    );
  }
});

module.exports = CompoundForm;
