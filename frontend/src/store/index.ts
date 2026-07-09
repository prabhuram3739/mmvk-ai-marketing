import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slices/dashboardSlice";
import instagramReducer from "./slices/instagramSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    instagram: instagramReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;