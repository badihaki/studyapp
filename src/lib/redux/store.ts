import { configureStore } from "@reduxjs/toolkit"
import questionSlice from "./features/questions/questionSlice";

export const store = ()=>{
    return configureStore({
        reducer:{
            questionSlice
        }
    });
}

// infer the type of store
export type AppStore = ReturnType<typeof store>
// infer the 'RootState' and 'AppDispatch' types from the store type, itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];