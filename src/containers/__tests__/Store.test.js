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

});