"use client";
import { PayloadTask, TasksState } from "@/redux/typesRedux/tasks/TasksTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TasksState = {
    tasks: [],
};

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<PayloadTask>) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action: PayloadAction<PayloadTask>) => {
            const newState = state.tasks.filter(
                (el: PayloadTask) => el.id !== action.payload.id,
            );
            state.tasks = newState;
        },
        editTask: (state, action: PayloadAction<PayloadTask>) => {
            const ItemIndex = state.tasks.findIndex(
                (el: PayloadTask) => el.id === action.payload.id,
            );
            state.tasks[ItemIndex] = action.payload;
        },
    },
});

const tasksReducer = tasksSlice.reducer;

export const { addTask, removeTask, editTask } = tasksSlice.actions;
export default tasksReducer;
