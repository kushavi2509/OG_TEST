import * as ACTIONS from './ActionTypes';
import request from '../../rest/Api';

export const getHundred = item => dispatch => {
  request({}, '', 'GET')
    .then(response => {
      let top = response.data.feed.entry;
      dispatch({type: ACTIONS.GET_TOP_HUNDRED, payload: top});
    })
    .catch(err => console.log(err));
};
export const handleFavourite = id => (dispatch, getState) => {
  let fullList = [...getState().GetTopHundredReducer.topSong];
  let index = fullList.findIndex(item => item.id.attributes['im:id'] == id);
  fullList[index]['isFav'] = fullList[index]['isFav'] ? false : true;
  dispatch({type: ACTIONS.ADD_FAV, payload: fullList});
};
