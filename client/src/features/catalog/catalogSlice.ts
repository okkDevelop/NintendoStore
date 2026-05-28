import { createSlice } from "@reduxjs/toolkit";
import type { ProductParams } from "../../app/models/productParams";

const initialState: ProductParams = {
    sortBy: 'name',
    searchTerm: "",
    types: [],
    loadedIndex: 0
}

export const catalogSlice = createSlice({
    name: 'catalogSlice',
    initialState,
    reducers: {
        setSortBy(state, action) {
            state.sortBy = action.payload;
            state.loadedIndex = 0;
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
            state.loadedIndex = 0;
        },
        setTypes(state, action) {
            const selectedType = action.payload;

            if (state.types.includes(selectedType)) 
                state.types = state.types.filter(t => t !== selectedType);
            else 
                state.types.push(selectedType);

            state.loadedIndex = 0;
        },
        setLoadedIndex(state, action) {
            state.loadedIndex = action.payload;
        },
        resetParams() {
            return initialState;
        }
    }
})

export const { setSortBy, setSearchTerm, setTypes, setLoadedIndex, resetParams } = catalogSlice.actions;