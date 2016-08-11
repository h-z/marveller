import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import mockComic from '../../helpers/MockComic';

import Comic from '../../../src/components/Comic/Comic.js';

describe('<Comic/>', function () {
  it('should have a comic', function () {
    const wrapper = shallow(<Comic comic={mockComic} />);
    expect(wrapper.find('.Comic')).to.have.length(1);
  });
});
