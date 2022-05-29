import { createSlice } from "@reduxjs/toolkit";
import FactorialCalculation from "../utils/FactorialCalculation";
import FactorState from "./FactorState";

const FactorSlice = createSlice({
    name: "factor",
    initialState: { InputValue : 1, ResultValue : 1 },
    reducers: {
        inputValueChanged : (state: FactorState, action: {payload: number}) => {
            return {
                InputValue: action.payload,
                ResultValue: FactorialCalculation(action.payload)
            }
        }
    }
});

export default FactorSlice.reducer;