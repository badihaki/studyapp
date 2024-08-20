import mongoose, { model, Schema } from "mongoose";
import { iQuestion } from "./iquestion";

interface questionDocument extends iQuestion{
    _id: String
}

const QuestionSchema = new  Schema<questionDocument>({
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

const Question = mongoose.models?.Question || model<questionDocument>("Question", QuestionSchema);

export default Question;