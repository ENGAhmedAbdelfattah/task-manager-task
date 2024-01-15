import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/local/tasks/tasksSlice";
const store = configureStore({
    reducer: {
        tanks: tasksReducer,
    },
    devTools: process.env.NODE_ENV === "development", // to make devTools redux toolkit became false in production
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
