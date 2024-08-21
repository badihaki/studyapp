'use client'

import React, { useState } from 'react'
import { iQuestion } from '../model/question/iquestion'

const Card = (props:{questionProps:iQuestion}) => {
  const { question, docs, tags, notes, difficulty } = props.questionProps;
  const [flipped, setFlip] = useState<Boolean>(false);
  
  return (
    <div className='w-[300px] h-[420px] bg-slate-400 bg-transparent my-2 text-center group perspective'>
        <div className='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 flex flex-col items-center'>
          <div id={`front-${props.questionProps._id}`} className='absolute backface-hidden w-full h-full font-serif font-bold text-black text-xl border-2 border-gray-500 bg-gray-300 content-center'>
            {question}
          </div>
          <div id={`back-${props.questionProps._id}`} className='absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 text-black font-semibold'>
            {docs}
          </div>
        </div>
    </div>
  )
}

export default Card
