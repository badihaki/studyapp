import { configureStore } from "@reduxjs/toolkit"

export const store = ()=>{
    return configureStore({
        reducer:{}
    });
}

// infer the type of store
export type AppStore = ReturnType<typeof store>
// infer the 'RootState' and 'AppDispatch' types from the store type, itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];