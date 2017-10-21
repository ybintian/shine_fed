import {
  GET_USERS_STARTED,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER_STARTED,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  CREATE_STARTED,
  CREATE_SUCCESS,
  CREATE_FAILURE,
} from 'actionTypes/userActionTypes';
import * as Status from 'status/userStatus';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  listStatus: '',
  recordStatus: '',
  createStatus: '',
  message: {},
  record: {},
  records: [],
  pagination: {},
});

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS_STARTED: {
      return state.set({
        listStatus: Status.LOADING
      });
    }
    case GET_USERS_SUCCESS: {
      return state.merge({
        listStatus: Status.SUCCESS,
        records: action.result.results,
        pagination: action.result.pagination
      });
    }
    case GET_USERS_FAILURE: {
      return state.merge({
        listStatus: Status.FAILURE
      });
    }
    case GET_USER_STARTED: {
      return state.merge({
        recordStatus: Status.FAILURE
      });
    }
    case GET_USER_SUCCESS: {
      return state.merge({
        recordStatus: Status.SUCCESS, 
        record: action.result.result
      });
    }
    case GET_USER_FAILURE: {
      return state.merge({
        recordStatus: Status.FAILURE
      });
    }
    case CREATE_STARTED: {
      return state.merge({
        createStatus: Status.LOADING,
      });
    }
    case CREATE_SUCCESS: {
      return state.merge({
        createStatus: Status.SUCCESS,
        message: action.message
      });
    }
    case CREATE_FAILURE: {
      return state.merge({
        createStatus: Status.FAILURE,
        message: action.message
      });
    }
    default: {
      return state;
    }
  }
}
