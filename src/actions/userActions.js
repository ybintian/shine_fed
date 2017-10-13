import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from 'actionTypes/userActionTypes';
import HttpClient from 'utils/HttpClient';

export const fetchUserStarted = () => ({
  type: FETCH_STARTED
});

export const fetchUserSuccess = (result) => ({
  type: FETCH_SUCCESS,
  result
})

export const fetchUserFailure = (error) => ({
  type: FETCH_FAILURE,
  error
})

export const fetchUser = () => {
  return (dispatch) => {
    const apiUrl = `/users`;

    dispatch(fetchUserStarted())

    return HttpClient.get(apiUrl).then((response) => {
      if (response.success != true) {
        throw new Error('Fail to get response with status ' + response.status);
      }
      dispatch(fetchUserSuccess(response.results));
    }).catch((error) => {
      dispatch(fetchUserFailure(error));
    })
  };
}
