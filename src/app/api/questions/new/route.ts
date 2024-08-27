import { iQuestion } from "@/lib/model/question/iquestion";
import { addQuestionToDB } from "@/lib/model/question/questionActions";
import connectDB from "@/lib/mongodb/connectDB";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function POST(request:NextRequest){
    try{
        const requestBody:iQuestion = await request.json();
        if(requestBody.question === ""){
            return NextResponse.json({
                error:"No question was submitted"
            }, {
                status: 400
            })
        }
        else if(requestBody.docs === ""){
            return NextResponse.json({
                error:"Question needs documentation"
            }, {
                status: 400
            })
        }
        else if(requestBody.notes[0] === ""){
            return NextResponse.json({
                error:"Need some notes to summarize the documentation"
            }, {
                status: 400
            })
        }

        const question = await addQuestionToDB(requestBody);
        console.log("sent question to db, got this back:");
        console.log(question);

        return NextResponse.json({
            message: "Question successfully created",
            success: true,
            data: question
        },{
            status: 200
        })
    }
    catch(err:any){
        console.log(err.message);
    }
}
