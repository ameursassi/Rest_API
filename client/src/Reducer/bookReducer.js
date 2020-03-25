import * as actionTypes from "../Actions/ActionTypes";

const inialState = {
  books: []
};

const bookReducer = (state = inialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.GET_BOOKS:
      return {
        ...state,
        books: payload
      };

    default:
      return state;
  }
};

export default bookReducer;
