import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('LandingPage component', () => {
  it('renders App', () => {
    const wrapper = shallow(<LandingPage 
      handleSubmit={() => {}}
      handleUpdate={() => {}}
      nickname=""
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
