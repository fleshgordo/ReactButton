import React from 'react';
import Router from 'react-router';
var {RouteHandler} = Router;

class App extends React.Component {
  render() {
    return (
      <div>
        <RouteHandler/>
      </div>
      );
  }
}

module.exports = App;
