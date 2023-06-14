import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  load: boolean;
}

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    load: false,
  } as CounterState,
  reducers: {
    incremented: (state) => {
      state.value += 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.load = action.payload;
    },
  },
});

export const { incremented, setValue, setLoading } = counterSlice.actions;

export default counterSlice.reducer;
