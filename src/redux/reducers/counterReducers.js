import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/actionTypes";

const counterReducers = (state = 0, action) => {
  let newState = 0;
  switch (action.type) {
    case INCREASE_COUNTER:
      return (newState = state + action.payload);
    case DECREASE_COUNTER:
      return (newState = state - action.payload);

    default:
      return state;
  }
};

export default counterReducers;
