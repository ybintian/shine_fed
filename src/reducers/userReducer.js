import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from 'actionTypes/userActionTypes';
import * as Status from 'status/userStatus';

export default (state = {status: Status.LOADING}, action) => {
  switch(action.type) {
    case FETCH_STARTED: {
      return {status: Status.LOADING};
    }
    case FETCH_SUCCESS: {
      return {...state, status: Status.SUCCESS, users: action.result};
    }
    case FETCH_FAILURE: {
      return {status: Status.FAILURE};
    }
    default: {
      return state;
    }
  }
}
