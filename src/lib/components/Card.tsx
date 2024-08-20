'use client'

import React, { useState } from 'react'
import { iQuestion } from '../model/question/iquestion'

const Card = (props:{questionProps:iQuestion}) => {
  const { question, docs, tags, notes, difficulty } = props.questionProps;
  const [hover, setHover] = useState<Boolean>(false);
  
  return (
    <div className='group bg-gray-600 bg-opacity-75 bg-transparent perspective
      max-w-sm cursor-pointer
      border-4 border-gray-600 rounded-t-lg rounded-b-sm
      my-5
      px-6 py-2
      transition duration-1000 ease-in-out
      hover:bg-gray-500
      hover:transition hover:duration-700 hover:ease-in-out' onClick={()=>setHover(!hover)}>
        <div className={hover ? 'group preserve-3d my-rotate-y-180 transition duration-1000 ease-in-out' : 'group transition duration-1000 ease-in-out' }>
          <div className='backface-hidden w-full h-full'>
            <span className='text-2xl font-serif font-bold text-left
              pl-8'>{question}</span>
            <br />
            <span className='text-center font-semibold text-sm'>
              {docs}
            </span>
            <br />
            <ul className='text-xs inline-flex space-x-2 ul-5 bg-gray-300 
              text-black rounded-md font-bold
              mt-4
              px-2 py-0.5'>
              {tags.map(tag=>(
                <li key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className='backface-hidden w-full h-full'></div>
        </div>
    </div>
  )
}

export default Card
