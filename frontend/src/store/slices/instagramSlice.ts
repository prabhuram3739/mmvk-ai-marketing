import { createSlice } from "@reduxjs/toolkit";

const instagramSlice = createSlice({
  name: "instagram",
  initialState: {
    connected: false,
  },
  reducers: {},
});

export default instagramSlice.reducer;