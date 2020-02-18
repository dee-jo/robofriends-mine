import { 
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED  
} from './constants';

import * as reducers from './reducers';
import * as actions from './actions';

describe('searchRobots', () => {

  const initialSearchState = {
    searchField: ''
  }

  test('Should return initial state', () => {
    expect(reducers.searchRobots(initialSearchState, {})).toEqual({searchField: ''});
  });

  test('Should handle the CHANGE_SEARCHFIELD event, set to "aa"', () => {
    expect(reducers.searchRobots(initialSearchState, {type: CHANGE_SEARCHFIELD, payload: 'aa'})).toEqual({searchField: 'aa'});
  })

  test('Should handle the CHANGE_SEARCHFIELD event using imported actions, set to "bb"', () => {
    expect(reducers.searchRobots(initialSearchState, actions.setSearchField('bb'))).toEqual({searchField: 'bb'});
  })

})


describe('requestRobots', () => {
  const robots = [{
    id: '123',
    name: 'test',
    email: 'test@gmail.com'
  }];
  const initialRobotsState = {
    robots: [],
    isPending: false,
    error: ''
  };

  test('Should return initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialRobotsState);
  });

  test('Should should handle REQUEST_ROBOTS_PENDING', () => {
    expect(reducers.requestRobots(initialRobotsState, {type: REQUEST_ROBOTS_PENDING} ).isPending).toEqual(true);
  });

  test('Should should handle REQUEST_ROBOTS_SUCCESS', () => {
    expect(reducers.requestRobots(initialRobotsState, {type: REQUEST_ROBOTS_SUCCESS, payload: robots} ))
      .toEqual({
        robots: robots,
        isPending: false,
        error: ''
      });
  });

  test('Should should handle REQUEST_ROBOTS_FAILED', () => {
    expect(reducers.requestRobots(initialRobotsState, {type: REQUEST_ROBOTS_FAILED, payload: 'NOOO ERROR!'} ))
      .toEqual({
        robots: initialRobotsState.robots,
        isPending: false,
        error: 'NOOO ERROR!'
      });
  });

})