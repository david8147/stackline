import { fetchAPIData } from '../api/apiMockData';
export const FETCH_API = 'FETCH_API';

export const fetchData = () => {
  return dispatch => {
      fetchAPIData().then(data => {
        dispatch({
          type: FETCH_API,
          payload: data
        });
      });
  }
};
