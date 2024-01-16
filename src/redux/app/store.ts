import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../features/local/tasks/tasksTotalSlice";
const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    devTools: process.env.NEXT_PUBLIC_NODE_ENV === "development", // to make devTools redux toolkit became false in production
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
