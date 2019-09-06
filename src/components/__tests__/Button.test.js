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