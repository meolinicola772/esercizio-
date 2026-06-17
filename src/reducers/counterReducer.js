// Stato iniziale del contatore
const initialState = {
  value: 0,
};

// Tipi di azione
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

// Action creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const reset = () => ({
  type: RESET,
});

// Reducer
export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        value: state.value - 1,
      };

    case RESET:
      return {
        value: 0,
      };

    default:
      return state;
  }
}