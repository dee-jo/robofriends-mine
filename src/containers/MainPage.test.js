import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
let wrapper2;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage {...mockProps} />);

  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [{
      id: 3,
      name: 'John',
      email: 'john@gmail.com'
    }],
    searchField: 'john',
    isPending: false
  }
  wrapper2 = shallow(<MainPage {...mockProps2} />);
});

test('Renders the MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Renders the MainPage without crashing with isPending=false', () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: true
  }
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3).toMatchSnapshot();
});

test('Filters robots correctly for empty robots', () => {
  expect(wrapper.instance().filterRobots([])).toEqual([]);
})

test('Filters robots correctly for "john" search', () => {
  const robots = [{
    id: 3,
    name: 'John',
    email: 'john@gmail.com'
  }];
  
  expect(wrapper2.instance().filterRobots()).toEqual(robots);
})
 
test('Filters robots correctly for "john" search, tests for length', () => {
  
  expect(wrapper2.instance().filterRobots().length).toEqual(1);
})