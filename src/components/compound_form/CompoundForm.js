'use strict';

var React = require('react/addons');
//var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('./compound_form.scss');

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
        <div className="compound-form__container">
          <div className="form__group">
            <label className="form__label">Deposit Amount</label>
            <input className="form__input" type="number" name="deposit" onChange={this.updateInputs} />
          </div>
          <div className="form__group">
            <label className="form__label">Monthly contributions</label>
            <input className="form__input" type="number" name="monthlyContributions" onChange={this.updateInputs} />
          </div>
        </div>
        <label className="form__label">Term (in years)</label>
        <input className="form__input" type="number" name="term" onChange={this.updateInputs} />
      </form>
    );
  }
});

module.exports = CompoundForm;
