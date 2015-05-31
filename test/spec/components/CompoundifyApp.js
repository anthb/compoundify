'use strict';

describe('CompoundifyApp', function () {
  var React = require('react/addons');
  var CompoundifyApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    CompoundifyApp = require('components/CompoundifyApp.js');
    component = React.createElement(CompoundifyApp);
  });

  it('should create a new instance of CompoundifyApp', function () {
    expect(component).toBeDefined();
  });
});
