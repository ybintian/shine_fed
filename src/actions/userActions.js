import {
  FETCH_STARTED,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CREATE_STARTED,
  CREATE_SUCCESS,
  CREATE_FAILURE
} from 'actionTypes/userActionTypes';
import {message} from 'antd';
import HttpClient from 'utils/HttpClient';

export const fetchUserStarted = () => ({
  type: FETCH_STARTED
});

export const fetchUserSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
});

export const fetchUserFailure = (error) => ({
  type: FETCH_FAILURE,
  error
});

export const createUserStarted = () => ({
  type: CREATE_STARTED
});

export const createUserSuccess = (message) => ({
  type: CREATE_SUCCESS,
  message
})

export const createUserFailure = (error) => ({
  type: CREATE_FAILURE,
  error
})

export const fetchUser = (params) => {
  console.info(33333, params);
  return (dispatch) => {
    const apiUrl = `/users`;

    dispatch(fetchUserStarted())
    return HttpClient.get(apiUrl, params).then((response) => {
      if (response.success != true) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      dispatch(fetchUserSuccess(response));
    }).catch((error) => {
      dispatch(fetchUserFailure(error));
    })
  };
}

export const createUser = (record) => {
  return (dispatch) => {
    const apiUrl = '/users'
    dispatch(createUserStarted());
    return HttpClient.post(apiUrl, record).then((response) => {
      if (response.success != true) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      message.success(response.message.cnt);
      dispatch(createUserSuccess(response.message));
    }).catch((error) => {
      message.error(response.message.cnt);
      dispatch(createUserFailure(error));
    })
  }
}
