import React from 'react';
import { shallow } from 'enzyme';
import { Product } from '../Product';
import { exportAllDeclaration } from '@babel/types';

it('renders without crashing', () => {
    let mountedProduct = shallow(<Product />);
});

it('displays the default product when no params are given', () => {
    let mountedProduct = shallow(<Product />);
    const defaultProduct = mountedProduct.find({src: 'images/defaultprod.png'});
    expect(defaultProduct.length).toBe(1); 
});