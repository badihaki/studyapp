import { iQuestion } from "@/lib/model/question/iquestion";
import { getQuestionsFromDB } from "@/lib/model/question/questionActions";
import connectDB from "@/lib/mongodb/connectDB";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(request:NextRequest) {
    try{
        const questions = await getQuestionsFromDB();
        const response = NextResponse.json({
            success:true,
            data: questions
        });
        return response;
    }
    catch(err:any){
        return NextResponse.json({
            error: err.message
        },{
            status: 500
        })
    }
}