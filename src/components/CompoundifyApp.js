'use strict';

var React = require('react/addons');
var CompoundForm = require('./CompoundForm');
var CompoundTotal = require('./CompoundTotal');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var CompoundifyApp = React.createClass({
  getInitialState: function() {
    return {
      deposit: 0,
      term: 0,
      monthlyContributions: 0
    };
  },
  handleFormUpdate: function(key, data) {
    console.log(key, data);
    this.setState({
      [key]: data
    });
  },
  render: function() {
    console.log(this.state);
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <CompoundForm data={this.state} compoundFormUpdate={this.handleFormUpdate} />
          <p>Interest Rate is 5%</p>
          <CompoundTotal data={this.state} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = CompoundifyApp;
