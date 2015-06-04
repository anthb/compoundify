'use strict';

var React = require('react/addons');
//var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
//require('../styles/main.css');

var CompoundTotal = React.createClass({
  getInitialState: function() {

    return {
      deposit: this.props.data.deposit,
      term: this.props.data.term,
      monthlyContributions: this.props.data.monthlyContributions,
      totalAmount: this.getTotalAmount(this.props.data)
    };
  },
  componentWillReceiveProps: function(nextProps) {
    this.setState({
      totalAmount: this.getTotalAmount(nextProps.data)
    });
  },
  getTotalAmount: function(props) {
    // total * 
    // PMT * (((1 + r/n)^nt - 1) / (r/n)) 
    // To do - Calculate off a loop to show the steps and graph it.
  },
  render: function() {
    return (
      <div>
        <p>Deposited - $<span>{this.props.data.deposit}</span></p>
        <p>Term (months) - $<span>{this.props.data.term}</span></p>
        <p>Monthly contributions - $<span>{this.props.data.monthlyContributions}</span></p>

        <h2>Total - $<span>{this.getTotalAmount}</span></h2>
      </div>
    );
  }
});

module.exports = CompoundTotal;
