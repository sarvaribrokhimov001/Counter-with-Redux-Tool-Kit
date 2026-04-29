import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/CounterReducer";

export const store = configureStore({
    reducer : {
        count : counterReducer,
    }
})