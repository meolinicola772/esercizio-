import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",

  initialState,

  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },

    removeUser: (state, action) => {
      state.users = state.users.filter(
        user => user.id !== action.payload
      );
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addUser,
  removeUser,
  setLoading,
  setError,
} = usersSlice.actions;

export default usersSlice.reducer;