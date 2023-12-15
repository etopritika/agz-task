import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getToken, postUser, getPositions } from "./userOperations";

const initialState = {
  users: [],
  positions: [],
  isLoading: false,
  error: null,
  page: 1,
  total_pages: null,
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
        state.total_pages = action.payload.total_pages;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getPositions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPositions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.positions = [...action.payload.positions];
      })
      .addCase(getPositions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getToken.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getToken.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.token = action.payload.token;
      })
      .addCase(getToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(postUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postUser.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { paginatePage } = slice.actions;
export default slice.reducer;
