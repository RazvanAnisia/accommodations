import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import Accomodations from './components/Accomodations';

configure({
  adapter: new Adapter()
});

describe('App', () => {
  it('should render Accommodations component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Accomodations)).toHaveLength(1);
  });
});
