// Stato iniziale
const initialState = [];

// Action Types
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

// Action Creators
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

// Reducer
export default function todosReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    case UPDATE_TODO:
      return state.map(todo =>
        todo.id === action.payload.id
          ? action.payload
          : todo
      );

    default:
      return state;
  }
}