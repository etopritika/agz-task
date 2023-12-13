import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://frontend-test-assignment-api.abz.agency/api/v1/";

export const getUsers = createAsyncThunk("users/getUsers", async (page = 1) => {
  try {
    const response = await fetch(`${URL}users?page=${page}&count=5`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
});

export const getToken = createAsyncThunk("token/getToken", async () => {
  try {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/token"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data.token;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
    throw error;
  }
});

export const getPositions = async () => {
  try {
    const response = await fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/positions"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
    return null;
  }
};
