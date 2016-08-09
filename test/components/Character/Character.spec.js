import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Character from '../../../src/components/Character/Character.js';

describe('<Character/>', function () {
  it('should have a character', function () {
    var mockCharacter = {
      thumbnail: {}
    };
    const wrapper = shallow(<Character character={mockCharacter} />);
    expect(wrapper.find('.Character')).to.have.length(1);
  });
});
