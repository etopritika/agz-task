import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { selectToken } from "./selectors";

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

export const postUser = createAsyncThunk(
  "users/createUser",
  async (data, { rejectWithValue }) => {
    const token = useSelector(selectToken);
    console.log(token);
    try {
      const response = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error(
        "There was a problem with the POST request:",
        error.message
      );
      return rejectWithValue(error.message);
    }
  }
);
