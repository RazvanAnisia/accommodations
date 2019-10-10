import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Rooms from './index';
import { StyledDefault } from './styles';

configure({
  adapter: new Adapter()
});

let wrapper;
beforeEach(() => {
  wrapper = shallow(<Rooms roomsData={null} />);
});

describe('Rooms', () => {
  it('Should render Rooms with default state', () => {
    expect(wrapper.find(StyledDefault)).toHaveLength(1);
  });
});

describe('Rooms', () => {
  it('Should render Rooms and display the individual rooms', () => {
    wrapper.setProps({ roomsData: [] });
    expect(wrapper.find(StyledDefault));
  });
});
