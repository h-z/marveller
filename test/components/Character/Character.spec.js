import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import MockCharacter from '../../helpers/MockCharacter';

import Character from '../../../src/components/Character/Character.js';

describe('<Character/>', function () {
  it('should have a character', function () {
    const wrapper = shallow(<Character character={MockCharacter} />);
    expect(wrapper.find('.Character')).to.have.length(1);
  });

  it('should have a name', function () {
    const wrapper = shallow(<Character character={MockCharacter} />);
    expect(wrapper.find('.back')).to.have.length(1);
  })
});
