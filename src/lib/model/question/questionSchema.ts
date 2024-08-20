import mongoose, { model, Schema } from "mongoose";
import { iQuestion } from "./iquestion";

const QuestionSchema = new  Schema<iQuestion>({
    _id: {
        type: mongoose.Types.ObjectId,
    },
    question:{
        type: String,
        unique:true,
        required:true
    },
    docs:{
        type: String,
        // unique: true,
        required: true
    },
    tags:{
        type: [],
    },
    notes: {
        type: []
    },
    difficulty: String
})

const Question = mongoose.models?.Question || model<iQuestion>("Question", QuestionSchema);

export default Question;