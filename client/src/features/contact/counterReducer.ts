import { createSlice } from "@reduxjs/toolkit";

export type CounterState = {
    data: number;
}

const initialState: CounterState = {
    data: 42
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increament: (state, action) => {
            state.data += action.payload;
        },
        decreament: (state, action) => {
            state.data -= action.payload;
        }
    }
})

export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;