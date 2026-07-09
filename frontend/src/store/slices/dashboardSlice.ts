import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    posts: 128,
    scheduled: 21,
  },
  reducers: {},
});

export default dashboardSlice.reducer;