import { shallow, mount, render } from 'enzyme';
import Card from './Card';
import React from 'react';

test('Expect to render Card component', () => {
  expect(shallow(<Card />).debug()).toMatchSnapshot();
})