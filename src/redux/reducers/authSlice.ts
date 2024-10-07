import { UserData, UserState } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserState = {
  authToken: null,
  userData: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserData>) {
      state.userData = action.payload;
    },
    removeUser(state) {
      state.userData = null;
    },
    setAuthToken(state, action: PayloadAction<string | null>) {
      state.authToken = action.payload;
    },
    removeAuthToken(state) {
      state.authToken = null;
    },
  },
});

export const { setUser, removeUser, setAuthToken, removeAuthToken } =
  authSlice.actions;

export default authSlice.reducer;

export const selectAuthToken = (state: { user: UserState }) =>
  state.user.authToken;

export const selectUser = (state: { user: UserState }) => state.user.userData;
