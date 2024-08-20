'use server'

import mongoose from "mongoose"
import { iQuestion } from "./iquestion"
import Question from "./questionSchema"

const addQuestionToDB = async (question:iQuestion)=>{
    try{
        const newQuestion = new Question({
            question: question.question,
            docs: question.docs,
            tags: question.tags,
            notes: question.notes,
            difficultyLevel: question.difficulty.toString(),
            _id: new mongoose.Types.ObjectId
        })
        console.log(newQuestion);
        newQuestion.save();
        newQuestion._id = newQuestion._id.toString();
        return JSON.stringify(newQuestion);
    }
    catch(err:unknown){
        console.log(err as Object);
        throw err;
    }
}

export { addQuestionToDB };