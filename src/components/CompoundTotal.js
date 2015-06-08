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
  roundNumbers: function(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  },
  getTotalAmount: function(props) {
    // total * 
    // PMT * (((1 + r/n)^nt - 1) / (r/n))
    // A = the future value of the investment/loan, including interest
    // P = the principal investment amount (the initial deposit or loan amount)
    // PMT = the monthly payment
    // r = the annual interest rate (decimal)
    // n = the number of times that interest is compounded per year
    // t = the number of years the money is invested or borrowed for
    // P = 5000. PMT = 100. r = 5/100 = 0.05 (decimal). n = 12. t = 10.
    // Future value of a series:
    // PMT * (((1 + r/n)^nt - 1) / (r/n))


    //[ Compound interest for principal ] + [ Future value of a series ]
    var principal,
        totalSum,
        roundedSum,
        pmt,
        compoundInterest,
        compoundInterestForPrincipal,
        futureValueOfSeries,
        annualInterestRate,
        timesCompoundedPerYear,
        yearsInvested;

    
    principal = parseFloat(props.deposit);
    yearsInvested = parseFloat(props.term);
    pmt = parseFloat(props.monthlyContributions);
    annualInterestRate = 0.05;
    timesCompoundedPerYear = 12;

    compoundInterest = Math.pow((1 + (annualInterestRate / timesCompoundedPerYear)), timesCompoundedPerYear * yearsInvested);
    compoundInterestForPrincipal = principal * compoundInterest;
    

    futureValueOfSeries = pmt * ((compoundInterest - 1) / (annualInterestRate /  timesCompoundedPerYear));
    totalSum = compoundInterestForPrincipal + futureValueOfSeries;
    roundedSum = this.roundNumbers(totalSum, 2);

    

    return roundedSum;
  },
  render: function() {
    return (
      <div>
        <p>Deposited - $<span>{this.props.data.deposit}</span></p>
        <p>Term (months) - $<span>{this.props.data.term}</span></p>
        <p>Monthly contributions - $<span>{this.props.data.monthlyContributions}</span></p>

        <h2>Total - $<span>{this.state.totalAmount}</span></h2>
      </div>
    );
  }
});

module.exports = CompoundTotal;
