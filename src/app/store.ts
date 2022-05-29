import { configureStore } from "@reduxjs/toolkit";
import FactorSlice from "../features/factorial/state/FactorSlice";

export const store = configureStore({
  reducer: {
    factor: FactorSlice
  }
})


