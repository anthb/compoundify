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
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
          <CompoundForm />
          <CompoundTotal />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = CompoundifyApp;
