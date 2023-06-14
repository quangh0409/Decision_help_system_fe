import { configureStore } from "@reduxjs/toolkit";
import counterReducer, { CounterState } from "./slice"; // Import kiểu CounterState từ counterSlice

// Combine các reducer lại với nhau
export default configureStore({
  reducer: counterReducer,
});
