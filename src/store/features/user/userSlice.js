import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    updateLoggedInUser: (state, action) => {
      state.userInfo.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, updateLoggedInUser } = userSlice.actions;

export default userSlice.reducer;
