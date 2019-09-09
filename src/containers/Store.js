import React from 'react';
import { Component } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Product } from '../components/Product';

export class Store extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentProductImage: 'images/defaultprod.png'
        }

        this.products = [
            {
                name: "Cup",
            },{
                name: "Beans",
            }
        ];

        this.chooseProductImage = this.chooseProductImage.bind(this);
    }

    chooseProductImage(e) {
        const product = e.target.textContent;
        const image = 'images/' + product + '.png';
        this.setState({currentProductImage: image});
    }

    render() {

        let productButtons = this.products.map((product, id) => {
            return(<Button handleClick={this.chooseProductImage} key={id} product={product.name} />);
        });

        return (
            <div>
                <Header />
                <div>
                    {productButtons}
                </div>
                <Product productimage={this.state.currentProductImage} />
            </div>
        );
    }
}