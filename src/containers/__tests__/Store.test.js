import React from 'react';
import { shallow } from 'enzyme';
import { Store } from '../Store';

describe("Store", function() {

    let mountedStore;
    
    //mount store once before all tests.
    beforeEach(()=>{
        mountedStore = shallow(<Store />);
    });

    it('should render without crashing', () => {
        let mountedStore = shallow(<Store />);
    });

    it('should have one header', () => {
        const headers = mountedStore.find('Header');
        expect(headers.length).toBe(1); 
    });

    it('should have two buttons', () => {
        const buttons = mountedStore.find('Button');
        expect(buttons.length).toBe(2); 
    });

    it('should have one map', () => {
        const maps = mountedStore.find('Map');
        expect(maps.length).toBe(1); 
    });

});