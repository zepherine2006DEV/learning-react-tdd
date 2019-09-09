import React from 'react';
import { Component } from 'react';

// stateless component

export class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src="images/logo.png" alt="James Store"/>
      </div>
    );
  }
}
