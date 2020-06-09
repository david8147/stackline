import { FETCH_API } from '../actions/dataFetch.js';
const initialState = {
  productData: [],
  loading: true
};

export const dataFetchReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_API:
      return {
        ...state,
          productData: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

