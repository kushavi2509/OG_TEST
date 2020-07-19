import * as ACTIONS from '../action/ActionTypes';

const initialState = {
  initial: [],
  place: 'initial',
};

export const GetTopHundredReducer = (state = initialState, action) => {
  console.log('actionReceived', action);
  switch (action.type) {
    case ACTIONS.GET_TOP_HUNDRED: {
      return {
        ...state,
        place: action.payload,
      };
    }
    case 'persist/REHYDRATE': {
      if (action.payload != undefined) {
        return {
          ...state,
          ...action.payload.GetTopHundredReducer,
        };
      } else {
        return {...state};
      }
    }
    default:
      return {...state};
  }
};
