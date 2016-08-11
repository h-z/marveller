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

});