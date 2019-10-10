import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Room from './index';
import { StyledRooms } from './styles';

configure({
  adapter: new Adapter()
});

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Room room={{ description: 'test' }} />);
});

describe('Rooms', () => {
  it('Should render Rooms container', () => {
    expect(wrapper.find(StyledRooms)).toHaveLength(1);
  });
});
