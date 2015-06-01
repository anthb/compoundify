'use strict';

var React = require('react/addons');
//var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
//require('../styles/main.css');

var CompoundTotal = React.createClass({
  render: function() {
    return (
      <div>
        <h2>Total</h2>
        <p>$<span>{this.props.deposit}</span></p>
      </div>
    );
  }
});

module.exports = CompoundTotal;
