import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Accomodations from './index';
import Table from './Table';
import Rooms from './Rooms';

configure({
  adapter: new Adapter()
});

describe('Accomomdations', () => {
  it('should render the accommodations table and Rooms with default state', () => {
    const wrapper = shallow(<Accomodations />);
    expect(wrapper.find(Table)).toHaveLength(1);
    expect(wrapper.find(Rooms)).toHaveLength(1);
  });
});
