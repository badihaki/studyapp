'use server'

import mongoose from "mongoose"
import { iQuestion } from "./iquestion"
import Question from "./questionSchema"
import { isCompositeComponent } from "react-dom/test-utils"

const addQuestionToDB = async (question:iQuestion)=>{
    try{
        console.log(question);
        const newQuestion = new Question({
            question: question.question,
            docs: question.docs,
            tags: question.tags,
            notes: question.notes,
            difficultyLevel: question.difficulty,
            _id: new mongoose.Types.ObjectId
        })
        // console.log(newQuestion);
        newQuestion.save();
        newQuestion._id = newQuestion._id.toString();
        // return JSON.stringify(newQuestion);
        return newQuestion;
    }
    catch(err:any){
        console.log(err);
        return err.message;
    }
}

const getQuestionsFromDB = async ()=>{
    const questions = await Question.find();
    return questions;
    // return JSON.stringify(questions);
}

const removeQuestionFromDB = async (id:string) => {
    try{
        console.log("deleting " + id)
        await Question.deleteOne({_id:id});
        return {id};
    }
    catch(err:any){
        return {error:err};
    }
}

export { addQuestionToDB, getQuestionsFromDB, removeQuestionFromDB };