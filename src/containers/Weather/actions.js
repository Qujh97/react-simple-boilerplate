import { getWeatherApi } from './api';

export const prefix = 'WEATHER';

export const STARTED = `${prefix}_STARTED`;
export const SUCCESS = `${prefix}_SUCCESS`;
export const FAILURE = `${prefix}_FAILURE`;

export const started = () => ({
  type: STARTED
});
export const success = result => ({
  type: SUCCESS,
  result
});
export const failure = error => ({
  type: FAILURE,
  error
});

/* export const GET = `${prefix}_GET`;

const get = result => ({
  type: GET,
  result
}); */

export const getAsync = city => async (dispatch, getState) => {
  dispatch(started());
  try {
    const res = await getWeatherApi(city);
    dispatch(success(res));
    return Promise.resolve(res);
  } catch (err) {
    dispatch(failure(err));
    return Promise.reject(err);
  }
};
