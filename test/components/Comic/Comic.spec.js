import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Comic from '../../../src/components/Comic/Comic.js';

describe('<Comic/>', function () {
  it('should have a comic', function () {
    var mockComic = {
      thumbnail: {}
    };
    const wrapper = shallow(<Comic character={mockComic} />);
    expect(wrapper.find('.Comic')).to.have.length(1);
  });
});
