import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import mockMarveller from '../../helpers/MockMarveller';

import App from '../../../src/components/App/App.js';


describe('<App/>', function () {
  it('should have a header', function () {
    const wrapper = shallow(<App marveller={mockMarveller}/>);
    expect(wrapper.find('.App-header')).to.have.length(1);
  });

  it('shouldn\'t be busy', function () {
    const wrapper = shallow(<App marveller={mockMarveller}/>);
    expect(wrapper.state().busy).to.equal(false);
  });

  it('should display busy indicator', function () {
    const wrapper = shallow(<App marveller={mockMarveller}/>);
    wrapper.setState({busy: true});
    expect(wrapper.state().busy).to.equal(true);
    expect(wrapper.find('img.loading')).to.have.length(1);
  });

});