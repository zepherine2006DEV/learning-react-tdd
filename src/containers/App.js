import React from 'react';
import { Component } from 'react';
import { Store } from './Store'
import '../App.css';

// declare a container (stateful) React component

export class App extends Component {
  render() {
    return(
      <div className="App">
        <Store />
      </div>
    );
  }
}

