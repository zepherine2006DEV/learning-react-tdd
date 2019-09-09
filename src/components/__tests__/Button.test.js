import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../Button';
import { exportAllDeclaration } from '@babel/types';

describe('Button', () => {

    let mountedButton;
    
    //mount button once before all tests.
    beforeEach(()=>{
        mountedButton = shallow(<Button />);
    });


    it('renders without crashing', () => {
        let mountedButton = shallow(<Button />);
    });

    it('renders a button', () => {
        const button = mountedButton.find('button');
        expect(button.length).toBe(1);
    });

});

describe('When a product is passed to it', () => {

    let mountedButton;
    let props;

    beforeEach(() => {
        props = {
            product:"Product 1"
        };
        mountedButton = shallow(<Button {...props} />);
    });


    it('should display the name of the product', () => {
        const buttonText = mountedButton.find('.product-button');
        expect(buttonText.text()).toEqual('Product 1'); 
    });
});

describe('When no product is passed to it', () => {

    let mountedButton;
    let props;

    beforeEach(() => {
        props = {
            product:undefined
        };
        mountedButton = shallow(<Button {...props} />);
    });


    it('should display the default product', () => {
        const buttonText = mountedButton.find('.product-button');
        expect(buttonText.text()).toEqual('Default Product'); 
    });
});

describe('when callback is provided as a prop', () => {
    it('should call the function when clicked', () => {
        const mockCallBack = jest.fn();
        const mountedButtonWithCallback = shallow(<Button handleClick={mockCallBack} />);
        mountedButtonWithCallback.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });
});