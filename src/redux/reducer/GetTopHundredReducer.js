import * as ACTIONS from '../action/ActionTypes';

const initialState = {
  initial: [],
  place: 'initial',
  topSong: [],
};

export const GetTopHundredReducer = (state = initialState, action) => {
  // console.log('actionReceived', action);
  switch (action.type) {
    case ACTIONS.GET_TOP_HUNDRED: {
      return {
        ...state,
        topSong: action.payload,
      };
    }
    case ACTIONS.ADD_FAV: {
      return {
        ...state,
        topSong: action.payload,
      };
    }
    // case 'persist/REHYDRATE': {
    //   if (action.payload != undefined) {
    //     return {
    //       ...state,
    //       ...action.payload.GetTopHundredReducer,
    //     };
    //   } else {
    //     return {...state};
    //   }
    // }
    default:
      return {...state};
  }
};
