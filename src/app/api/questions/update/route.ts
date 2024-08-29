import { updateQuestionInDB } from "@/lib/model/question/questionActions";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:NextRequest) {
    try{
        const reqBody = await request.json();
        console.log(reqBody);
        const response = await updateQuestionInDB(reqBody);
        return NextResponse.json({message:"good to go, read backend logs", question:response},{status:200})
    }
    catch(err:any){
        console.log(err.message);
        return NextResponse.json({error:err.message}, {status:500})
    }
}