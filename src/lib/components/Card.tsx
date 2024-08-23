"use client";

import React, { useState } from "react";
import { iQuestion } from "../model/question/iquestion";
import { QuestionModal } from "./QuestionModal";

const Card = (props: { questionProps: iQuestion }) => {
  const { question, docs, tags, notes, difficulty } = props.questionProps;
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const renderedTags:string[] = tags.map((tag) => {
    if (tag != tags[tags.length - 1]) {
      return tag + ", ";
    }
    return tag;
  });

  const modalProps = {
    question: props.questionProps,
    modalOpen,
    onClose: ()=>setModalOpen(false)
  }

  return (
    <div className="justify-center items-center h-fit">
      <div className="w-[300px] h-[320px] bg-transparent my-2 text-center group perspective rounded-t-lg rounded-b-md">
        <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 flex flex-col items-center content-center  rounded-t-lg rounded-b-md">
          <div
            id={`front-${props.questionProps._id}`}
            className="absolute backface-hidden w-full h-full border-2 border-gray-500 bg-slate-400 rounded-t-lg rounded-b-md"
          >
            <div className="rounded-full bg-gray-300 mx-2 mt-4 py-1 pb-2">
              <div className="text-red-600 text-lg font-bold mt-2 mb-0">
                Question:
              </div>
              <div className="font-serif font-bold text-black text-2xl">
                {question}
              </div>
            </div>
            <div className="text-stone-200 text-lg font-semibold my-4 mb-0">
              Official Docs:
            </div>
            <div className="font-semibold text-stone-800">{docs}</div>
          </div>
          <div
            id={`back-${props.questionProps._id}`}
            className="absolute flex flex-col my-rotate-y-180 backface-hidden w-full h-full bg-slate-500 text-black font-semibold  rounded-t-lg rounded-b-md"
          >
            <div className="mt-8 mx-4 bg-gray-300 border-2 rounded-xl">
              <span className="text-slate-600 text-sm font-bold font-serif">
                Tags:
              </span>
              <br />
              {renderedTags}
            </div>
            <div className="h-[15vh]"></div>
            <div className="self-center -mt-1">
              <button className="transition duration-300 ease-in-out bg-indigo-300 border-indigo-500 rounded-full w-[80px] h-[35px] text-xs hover:bg-indigo-500 active:text-slate-200 active:bg-indigo-900 active:border-0" onClick={()=>setModalOpen(true)}>
                Full Details
              </button>
            </div>
          </div>
        </div>
      </div>
        <QuestionModal question={props.questionProps} modalOpen={modalOpen} onModalClose={()=>setModalOpen(false)} />
    </div>
  );
};

export default Card;
