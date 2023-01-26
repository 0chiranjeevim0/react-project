import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../Axios/Instance";
const initialState = {
  isAuthenticated: false,
  email: "",
  password: "",
  authLoading: false,
  isLogin: false,
};
export const initialCheckAuth = createAsyncThunk(
  "users/checkAuth",
  async (thunkAPI) => {
    try {
      const response = await Axios.post("", {
        token: JSON.parse(localStorage.getItem("access")) || null,
      });
      const data = response;
      console.log(data);
      if (response.status === 200) return data.data;
      else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthTrue: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.authLoading = false;
      state.isLogin = true;
    },
    setAuthFalse: (state, action) => {
      localStorage.clear();
      state.isAuthenticated = false;
      state.email = "";
      state.password = "";
      state.isLogin = false;
      state.authLoading = false;
    },
    setAuthLoading: (state, action) => {
      state.authLoading = true;
    },
  },
  extraReducers: {
    [initialCheckAuth.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
      state.password = action.payload.name;
      state.isLogin = true;
      state.authLoading = false;
    },
    [initialCheckAuth.pending]: (state) => {
      state.authLoading = true;
    },
    [initialCheckAuth.rejected]: (state, { payload }) => {
      localStorage.clear();
      state.isAuthenticated = false;
      state.email = "";
      state.password = "";
      state.isLogin = false;
      state.authLoading = false;
    },
  },
});
export const { setAuthTrue, setAuthFalse, setAuthLoading } = authSlice.actions;

export const authState = (state) => state.auth;

export default authSlice.reducer;
