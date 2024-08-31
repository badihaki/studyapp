import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface iUConfig{
    init:boolean,
}

const initialState:iUConfig = {
    init:false,
}

export const userConfigSlice = createSlice({
    name: "userConfig",
    initialState,
    reducers:{
        setInit: (state:iUConfig, action:PayloadAction<boolean>)=>{
            state.init = action.payload;
        }
    }
})

export const { setInit } = userConfigSlice.actions;
export const selectUserConfig = (state:RootState) => state;
export default userConfigSlice.reducer;