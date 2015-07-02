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
      monthlyContributions: this.props.data.monthlyContributions,
      interest: this.props.data.interest
    };
  },
  updateInputs: function(event) {
    
    this.setState({[event.target.name] : [event.target.value]});
    this.props.compoundFormUpdate(event.target.name, event.target.value);
  },
  // updateTerm: function(event) {
  //   this.setState({term : event.target.value});
  //   this.updateForm();
  // },
  // updateForm: function() {
  //   this.props.compoundFormUpdate({
  //     deposit: this.state.deposit,
  //     term: this.state.term
  //   });
  // },
  render: function() {
    return (
      <form className="cform">
        <div className="cform__container">
          <div className="cform__group">
            <label className="cform__label">Deposit Amount</label>
            <input className="cform__input" value={this.props.data.deposit} type="number" name="deposit" onChange={this.updateInputs} />
          </div>
          <div className="cform__group">
            <label className="cform__label">Monthly contributions</label>
            <input className="cform__input" value={this.props.data.monthlyContributions} type="number" name="monthlyContributions" onChange={this.updateInputs} />
          </div>
          <div className="cform__group">
            <label className="cform__label">Term (in years)</label>
            <input className="cform__input" value={this.props.data.term} type="number" name="term" onChange={this.updateInputs} />
          </div>
          <div className="cform__group">
            <label className="cform__label">Interest rate</label>
            <input className="cform__input" value={this.props.data.interest} type="number" name="interest" onChange={this.updateInputs} />
          </div>
        </div>
      </form>
    );
  }
});

module.exports = CompoundForm;
