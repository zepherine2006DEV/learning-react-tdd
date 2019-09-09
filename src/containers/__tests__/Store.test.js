import React from 'react';
import { shallow } from 'enzyme';
import { Store } from '../Store';

describe("Store", function() {

    let mountedStore;
    
    //mount Store once before all tests.
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

    it('should have one product', () => {
        const maps = mountedStore.find('Product');
        expect(maps.length).toBe(1); 
    });

});

describe('chooseProductImage', () => {
    it('updates state.currentProductImage using product name passed to it', () => {
        let mountedStore = shallow(<Store />);
        let mockEvent = {target:{textContent:'testProduct'}};
        mountedStore.instance().chooseProductImage(mockEvent);
        expect(mountedStore.instance().state.currentProductImage).toBe('images/testProduct.png');
    });
});