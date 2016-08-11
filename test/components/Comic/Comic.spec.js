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

  it('should have a title', function () {
    const wrapper = shallow(<Comic comic={mockComic} />);
    expect(wrapper.find('.back')).to.have.length(1);
    expect(wrapper.find('.back')).to.have.text('mock-comic');
  });

  it('should be visible by default', function () {
    const wrapper = shallow(<Comic comic={mockComic} />);
    expect(wrapper.find('.Comic')).to.not.have.className('hidden');

  });

  it('should be hidden if not visible', function () {
    mockComic.visible = false;
    const wrapper = shallow(<Comic comic={mockComic} />);
    expect(wrapper.find('.Comic')).to.have.className('hidden');

  })
});
