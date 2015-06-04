'use strict';

var React = require('react/addons');
//var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
//require('../styles/main.css');

var CompoundForm = React.createClass({
  getInitialState: function() {
    return {
      deposit: this.props.data.deposit,
      term: this.props.data.term,
      monthlyContributions: this.props.data.monthlyContributions
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
        <label>Deposit Amount</label>
        <input type="number" name="deposit" onChange={this.updateInputs} className="compound-form__deposit" />
        <label>Term (in months)</label>
        <input type="number" name="term" onChange={this.updateInputs} className="compound-form__term" />
        <label>Monthly contributions</label>
        <input type="number" name="monthlyContributions" onChange={this.updateInputs} className="compound-form__monthly-contribution" />
      </form>
    );
  }
});

module.exports = CompoundForm;
