import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
export const store = configureStore({
  reducer: {
    counter : counterReducer,
  },
});


// we need this only becouse of TS
export type AppDispatch = typeof store.dispatch; 
export type RootState = ReturnType<typeof store.getState>;