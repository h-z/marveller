import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import SearchFilter from '../../../src/components/Search/SearchFilter.js';

describe('<SearchFilter/>', function () {
  it('should have an inline form', function () {
    const wrapper = shallow(<SearchFilter/>);
    expect(wrapper.find('Form')).to.have.length(1);
  });
});
