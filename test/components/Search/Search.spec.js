import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';

import mockMarveller from '../../helpers/MockMarveller';

import Search from '../../../src/components/Search/Search.js';

describe('<Search/>', function () {
  it('should have search sections', function () {
    const wrapper = shallow(<Search marveller={mockMarveller}/>);
    expect(wrapper.find('.Search')).to.have.length(1);
    expect(wrapper.find('.SearchResults')).to.have.length(1);
  });

  it('should display results if there\'s any', function () {
    const wrapper = mount(<Search marveller={mockMarveller}/>);
    wrapper.setState({
      results: [{id: 1, thumbnail: {}}, {id: 2, thumbnail: {}}]
    });
    expect(wrapper.find('Character')).to.have.length(2);
  });

  it('shouldn\'t display results if there was no result', function () {
    const wrapper = mount(<Search marveller={mockMarveller}/>);
    wrapper.setState({
      results: [{id: 1, thumbnail: {}}, {id: 2, thumbnail: {}}]
    });
    wrapper.setState({
      results: []
    });
    expect(wrapper.find('Character')).to.have.length(0);
  });
});
