import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getToken } from "./userOperations";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  page: 1,
  token: "",
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    paginatePage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.users = [...action.payload.users];
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { paginatePage } = slice.actions;
export default slice.reducer;
