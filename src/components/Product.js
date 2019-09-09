import React, {Component} from 'react';
import './Product.css';

export class Product extends Component {
    render(){
        return(
            <div className="ProductBox">
                <img src={this.props.productimage} />    
            </div>
        );
    }
}