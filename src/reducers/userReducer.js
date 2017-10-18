import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CREATE_STARTED,
  CREATE_SUCCESS,
  CREATE_FAILURE,
} from 'actionTypes/userActionTypes';
import * as Status from 'status/userStatus';

export default (state = {status: Status.LOADING}, action) => {
  switch(action.type) {
    case FETCH_STARTED: {
      return {listStatus: Status.LOADING};
    }
    case FETCH_SUCCESS: {
      console.info(action);
      return {...state, listStatus: Status.SUCCESS, records: action.result.results, pagination: action.result.pagination};
    }
    case FETCH_FAILURE: {
      return {listStatus: Status.FAILURE};
    }
    case CREATE_STARTED: {
      return {status: Status.LOADING};
    }
    case CREATE_SUCCESS: {
      console.info(4444, state, action);
      return {...state, status: Status.SUCCESS, message: action.message};
    }
    case CREATE_FAILURE: {
      return {status: Status.FAILURE};
    }
    default: {
      return state;
    }
  }
}
