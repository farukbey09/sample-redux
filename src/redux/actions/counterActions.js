import { INCREASE_COUNTER, DECREASE_COUNTER } from "./actionTypes";

export const increaseCounter = () => ({
  type: INCREASE_COUNTER,
  payload: 1,
});

export const decreaseCounter = () => ({
  type: DECREASE_COUNTER,
  payload: 1,
});
