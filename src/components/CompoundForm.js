'use strict';

var React = require('react/addons');
//var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
//require('../styles/main.css');

var CompoundForm = React.createClass({
  updateDeposit: function(event) {
    console.log(event.target.value)
  },
  render: function() {
    return (
      <form className="compound-form">
        <input type="number" onChange={this.updateDeposit} className="compound-form__deposit" />
        <input type="number" className="compound-form__term" />
      </form>
    );
  }
});

module.exports = CompoundForm;
