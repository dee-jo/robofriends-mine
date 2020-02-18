import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

import { 
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
 } from './constants';


const mockStore = configureMockStore([thunkMiddleware]);

test('Should create an action to search robots', () => {
  const text = 'aaa';
  const expectedAction = {
    type: CHANGE_SEARCHFIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});


test('Action for requesting robots', () => {
  const store = mockStore();
  store.dispatch(actions.setRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING
  }
  // console.log('action', action);
  expect(action[0]).toEqual(expectedAction);
});