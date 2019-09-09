import React, {Component} from 'react';
import './Product.css';

export class Product extends Component {
    render(){
        return(
            <div className="ProductBox">
                <img src="images/defaultprod.png" />    
            </div>
        );
    }
}