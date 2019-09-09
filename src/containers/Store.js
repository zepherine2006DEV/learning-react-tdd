import React from 'react';
import { Component } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Product } from '../components/Product';

export class Store extends Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                <Button product="Coffee Cup"/>
                <Button product="Coffee Beans"/>
                </div>
                <Product />
            </div>
        );
    }
}