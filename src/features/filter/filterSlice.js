import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "All",
    colors: [],
    todo: {},
    modal: false
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers:{
        setStatus: (state,action) => {
            state.status = action.payload;
        },
        addColor: (state,action) => {
            state.colors.push(action.payload);
        },
        removeColor: (state,action) => {
            state.colors = state.colors.filter(existingColor => existingColor !== action.payload);
        },
        setTodo: (state,action) => {
            state.todo = action.payload;
        },
        setModal: (state,action) => {
            state.modal = action.payload;
        }
    }
})

export const {
    setStatus,
    addColor,
    removeColor,
    setTodo,
    setModal
} = filterSlice.actions;

export default filterSlice.reducer;