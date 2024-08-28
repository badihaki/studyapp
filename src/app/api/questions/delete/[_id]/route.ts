import Question from "@/lib/model/question/questionSchema";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request:NextRequest) {
    try{
        const reqBody = await request.json();
        Question.deleteOne({id:reqBody.id});
        return NextResponse.json({message:"Done", id:reqBody.id},{status:202})
    }
    catch(err:any){
        console.log(err);
        return NextResponse.json({error:err.message}, {status:500})
    }
}