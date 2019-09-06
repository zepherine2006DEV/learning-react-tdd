import React from 'react';
import { Component } from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Map } from '../components/Map';

export class Store extends Component {
    render() {
        return (
            <div>
                <Header />
                <Button />
                <Button />
                <Map />
            </div>
        );
    }
}