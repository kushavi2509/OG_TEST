import * as ACTIONS from './ActionTypes';

export const getHundred = item => dispatch => {
  var payload = item === 'Home' ? 'School' : 'Home';
  dispatch({type: ACTIONS.GET_TOP_HUNDRED, payload: payload});
};
