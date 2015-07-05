'use strict';

var React = require('react/addons');
var CompoundForm = require('./compound_form/CompoundForm');
var CompoundTotal = require('./CompoundTotal');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageURL = require('../images/yeoman.png');

var CompoundifyApp = React.createClass({
  getInitialState: function() {
    return {
      deposit: 0,
      term: 1,
      monthlyContributions: 0,
      interest: 3
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
          <h1>Compoundify</h1>
          <CompoundForm data={this.state} compoundFormUpdate={this.handleFormUpdate} />
          <CompoundTotal data={this.state} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = CompoundifyApp;
