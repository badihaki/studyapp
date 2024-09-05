"use client";

import React, { useState } from "react";
import { iQuestion } from "../model/question/iquestion";
import { QuestionModal } from "./QuestionModal";

const Card = (props: { questionProps: iQuestion }) => {
  const { question, docs, tags, notes, difficulty } = props.questionProps;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const renderedTags = tags.slice(0,4).map((tag) => <li key={`${props.questionProps._id.slice(0,5)}-${tag.slice(0,3)}`} className="bg-opacity-25 bg-slate-700 mx-auto h-fit w-fit px-2 py-1 my-1 rounded-full">{tag}</li>)

  return (
    <div className="justify-center items-center h-fit">
      <div className="w-[300px] h-[320px] bg-transparent my-2 text-center group perspective rounded-t-lg rounded-b-md">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 flex flex-col items-center content-center  rounded-t-lg rounded-b-md">
          <div
            id={`front-${props.questionProps._id}`}
            className="absolute backface-hidden w-full h-full border-2 border-gray-500 bg-slate-400 rounded-t-lg rounded-b-md"
            aria-label="Card Front"
          >
            <div className="rounded-full bg-gray-300 mx-2 mt-4 py-1 pb-2">
              <div id={`Question-${props.questionProps.question}`} className="text-red-600 text-lg font-bold mt-2 mb-0">
                Question:
              </div>
              <div className="font-serif font-bold text-black text-2xl">
                {question}
              </div>
            </div>
            <div id={`Question-${props.questionProps.docs}`} className="text-stone-200 text-lg font-semibold my-4 mb-0">
              Official Docs:
            </div>
            <div className="font-semibold text-stone-800">{docs}</div>
          </div>
          <div
            id={`back-${props.questionProps._id}`}
            className="absolute flex flex-col my-rotate-y-180 backface-hidden w-full h-full bg-slate-500 text-black font-semibold  rounded-t-lg rounded-b-md"
            aria-label="Card Back"
          >
            <div id={`Question-${props.questionProps.tags}`} className="mt-8 mx-4 bg-gray-300 border-2 rounded-xl">
              <span className="text-slate-600 text-sm font-bold font-serif">
                Tags:
              </span>
              <br />
              <ul>
                {renderedTags}
              </ul>
            </div>
            <div className="relative -bottom-10">
              <div className="self-center my-6">
                <button role="details-button" aria-label="Click button for full details" className="relative transition duration-300 ease-in-out bg-indigo-300 border-indigo-500 rounded-full w-[80px] h-[35px] text-xs hover:bg-indigo-500 active:text-slate-200 active:bg-indigo-900 active:border-0" onClick={()=>setModalOpen(true)}>
                  Full Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <QuestionModal question={props.questionProps} modalOpen={modalOpen} onModalClose={()=>setModalOpen(false)} />
    </div>
  );
};

export default Card;
