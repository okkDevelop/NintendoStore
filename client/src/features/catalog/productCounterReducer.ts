import { createSlice } from "@reduxjs/toolkit"

export type ProductCounterState = {
    counter: number
}

const initialState: ProductCounterState = {
    counter: 1
}

export const productCounterSlice = createSlice({
    name: 'productCounter',
    initialState,
    reducers: {
        increament: (state, action) => {
            state.counter += action.payload;
        },
        decreament: (state, action) => {
            state.counter -= action.payload;
        }
    }
})

export const { increament, decreament } = productCounterSlice.actions;
export default productCounterSlice.reducer;