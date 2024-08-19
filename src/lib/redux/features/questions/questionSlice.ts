import { iQuestion } from "@/lib/model/iquestion";
import { RootState } from "../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:iQuestion[] = [];

export const questionSlice = createSlice({
    name: "questions",
    initialState,
    reducers:{
        getAllQuestions: (state:iQuestion[], action:PayloadAction<iQuestion[]>)=>{
            return state = action.payload;
        },
        addQuestion: (state:iQuestion[], action:PayloadAction<iQuestion>)=>{
            state.push(action.payload);
            return state;
        },
        modifyQuestion: (state:iQuestion[], action:PayloadAction<iQuestion>)=>{
            return state.map(question=>{
                if(question._id === action.payload._id){
                    question = action.payload;
                }
                return question;
            })
        },
        removeQuestion: (state:iQuestion[], action:PayloadAction<string>)=>{
            return state.filter(question=>{
                if(question._id !== action.payload) return question;
            })
        }
    }
})

export const { getAllQuestions, addQuestion, modifyQuestion, removeQuestion } = questionSlice.actions;
export const selectQuestions = (state:RootState) => state;
export default questionSlice.reducer;