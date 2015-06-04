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
      term: 0
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
          <CompoundForm compoundFormUpdate={this.handleFormUpdate} />
          <CompoundTotal deposit={this.state.deposit} term={this.state.term} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = CompoundifyApp;
