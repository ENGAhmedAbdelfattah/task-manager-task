"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    PayloadTotalTask,
    TasksTotalState,
} from "@/redux/typesRedux/tasks/TasksTotalTypes";

const initialState: TasksTotalState = {
    tasksNums: 0,
};

const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducers: {
        updateTasksNums: (state, action: PayloadAction<PayloadTotalTask>) => {
            state.tasksNums = action.payload;
        },
    },
});

const tasksReducer = tasksSlice.reducer;

export const { updateTasksNums } = tasksSlice.actions;
export default tasksReducer;
