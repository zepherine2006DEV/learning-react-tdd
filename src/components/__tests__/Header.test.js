import React from 'react';
import {shallow} from 'enzyme';
import { Header } from '../Header.js';
import { exportAllDeclaration } from '@babel/types';

describe('Header', () => {

  let mountedHeader;

  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it('should render a logo', () => {
    const logoImg = mountedHeader.find({ src: 'images/logo.png'});
    expect(logoImg.length).toBe(1); 
  });

});

