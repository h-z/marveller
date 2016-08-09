import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../../../src/components/App/App.js';

describe('<App/>', function () {
  it('should have a header', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.App-header')).to.have.length(1);
  });

  it('should have a timeline section', function () {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('.RelatedTimeline')).to.have.length(1);
  });
});