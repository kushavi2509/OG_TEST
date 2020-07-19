import * as ACTIONS from './ActionTypes';
import request from '../../rest/Api';

export const getHundred = item => dispatch => {
  var payload = item === 'Home' ? 'School' : 'Home';
  request({}, '', 'GET')
    .then(response => {
      let top = response.data.feed.entry;
      dispatch({type: ACTIONS.GET_TOP_HUNDRED, payload: top});
    })
    .catch(err => console.log(err));
};
export const handleFavourite = index => (dispatch, getState) => {
  let fullList = [...getState().GetTopHundredReducer.topSong];
  fullList[index]['isFav'] = fullList[index]['isFav'] ? false : true;
  dispatch({type: ACTIONS.ADD_FAV, payload: fullList});
};
