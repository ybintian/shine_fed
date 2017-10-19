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

export default (state = {status: Status.LOADING}, action) => {
  switch(action.type) {
    case GET_USERS_STARTED: {
      return {...state, listStatus: Status.LOADING};
    }
    case GET_USERS_SUCCESS: {
      console.info(action);
      return {...state, listStatus: Status.SUCCESS, records: action.result.results, pagination: action.result.pagination};
    }
    case GET_USERS_FAILURE: {
      return {...state, listStatus: Status.FAILURE};
    }
    case GET_USER_STARTED: {
      return {...state, listStatus: Status.LOADING};
    }
    case GET_USER_SUCCESS: {
      console.info(action);
      return {...state, listStatus: Status.SUCCESS, record: action.result.result};
    }
    case GET_USER_FAILURE: {
      return {...state, listStatus: Status.FAILURE};
    }
    case CREATE_STARTED: {
      return {...state, status: Status.LOADING};
    }
    case CREATE_SUCCESS: {
      return {...state, status: Status.SUCCESS, message: action.message};
    }
    case CREATE_FAILURE: {
      return {...state, status: Status.FAILURE};
    }
    default: {
      return state;
    }
  }
}
