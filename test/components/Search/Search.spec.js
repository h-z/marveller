import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import mockMarveller from '../../helpers/MockMarveller';

import Search from '../../../src/components/Search/Search.js';

describe('<Search/>', function () {
  it('should have search sections', function () {
    const wrapper = shallow(<Search marveller={mockMarveller}/>);
    expect(wrapper.find('.Search')).to.have.length(1);
    expect(wrapper.find('.SearchResults')).to.have.length(1);
  });
});
