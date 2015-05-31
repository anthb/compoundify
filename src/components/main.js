'use strict';

var CompoundifyApp = require('./CompoundifyApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={CompoundifyApp}>
    <Route name="/" handler={CompoundifyApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
