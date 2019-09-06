import React from 'react';
import { shallow } from 'enzyme';
import { Store } from '../Store';

it('renders without crashing', () => {
  let mountedStore = shallow(<Store />);
});
