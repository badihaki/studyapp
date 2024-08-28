import { removeQuestionFromDB } from "@/lib/model/question/questionActions";
import Question from "@/lib/model/question/questionSchema";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:NextRequest) {
    try{
        const reqBody = await request.json();
        const response = await removeQuestionFromDB(reqBody.id);
        const {id, error} = response;
        if(error){
            return NextResponse.json({error:"some kinda server error, idk"},{status:500})
        }
        return NextResponse.json({message:"Done", id},{status:202})
    }
    catch(err:any){
        console.log(err);
        return NextResponse.json({error:err.message}, {status:500})
    }
}