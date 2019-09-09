import React from 'react';
import { shallow } from 'enzyme';
import { Product } from '../Product';

describe('Product', () => {

    let mountedProduct;
    let props;

    beforeEach(() => {
        props = {
            productimage: 'images/prod.png',
        };

        mountedProduct = shallow(<Product {...props} />);
    });

    it('should display the image passed to it via props', () => {
        const image = mountedProduct.find({ src: 'images/prod.png'});
        expect(image.length).toBe(1);
    });
 
});