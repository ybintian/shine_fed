import {
  GET_USERS_STARTED,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_USER_STARTED,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  CREATE_STARTED,
  CREATE_SUCCESS,
  CREATE_FAILURE
} from 'actionTypes/userActionTypes';
import {message} from 'antd';
import HttpClient from 'utils/HttpClient';

export const getUsersStarted = () => ({
  type: GET_USERS_STARTED
});

export const getUsersSuccess = (result) => ({
  type: GET_USERS_SUCCESS,
  result
});

export const getUsersFailure = (error) => ({
  type: GET_USERS_FAILURE,
  error
});

export const getUserStarted = () => ({
  type: GET_USER_STARTED
});

export const getUserSuccess = (result) => ({
  type: GET_USER_SUCCESS,
  result
});

export const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
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

export const getUsers = (params) => {
  console.info(33333, params);
  return (dispatch) => {
    const apiUrl = `/users`;

    dispatch(getUsersStarted())
    return HttpClient.get(apiUrl, params).then((response) => {
      if (response.success != true) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      dispatch(getUsersSuccess(response));
    }).catch((error) => {
      dispatch(getUsersFailure(error));
    })
  };
}

export const getUser = (params) => {
  return (dispatch) => {
    const apiUrl = `/users/${params.user_id}`;

    dispatch(getUserStarted())
    return HttpClient.get(apiUrl, params).then((response) => {
      if (response.success != true) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      dispatch(getUserSuccess(response));
    }).catch((error) => {
      dispatch(getUserFailure(error));
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
