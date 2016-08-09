import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Search from '../../../src/components/Search/Search.js';

describe('<Search/>', function () {
  it('should have search sections', function () {
    var mockMarveller = {
      characters: function () {}
    };
    const wrapper = shallow(<Search marveller={mockMarveller}/>);
    expect(wrapper.find('.Search')).to.have.length(1);
    expect(wrapper.find('.SearchResults')).to.have.length(1);
  });
});
