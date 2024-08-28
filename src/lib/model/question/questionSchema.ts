import mongoose, { model, Schema } from "mongoose";
import { difficultyLevel, iQuestion } from "./iquestion";

const QuestionSchema = new  Schema<iQuestion>({
    _id: {
        type: mongoose.Types.ObjectId,
    },
    question:{
        type: String,
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
    difficulty: {
        type: Number
    }
})

const Question = mongoose.models?.Question || model<iQuestion>("Question", QuestionSchema);

export default Question;