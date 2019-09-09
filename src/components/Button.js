import React, {Component} from 'react';
import './Button.css'

export class Button extends Component {
    render(){
        return(<button className="product-button" onClick={this.props.handleClick}>{this.props.product ? this.props.product : "Default Product"}</button>);
    }
}