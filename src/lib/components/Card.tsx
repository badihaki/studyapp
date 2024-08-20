import React from 'react'
import { iQuestion } from '../model/question/iquestion'

const Card = (props:{questionProps:iQuestion}) => {
  const { question, docs, tags, notes, difficulty } = props.questionProps;
  return (
    <div className='bg-gray-600 bg-opacity-75
                    border-4 border-gray-600 rounded-t-lg rounded-b-sm
                    my-5
                    max-w-sm
                    px-6 py-2
                    transition duration-500 ease-in-out
                    hover:bg-gray-500
                    hover:transition hover:duration-1000 hover:ease-in-out
                    '>
      <span className='text-2xl font-serif font-bold text-left
                    pl-8
      '>{question}</span>
      <br />
      <span className='text-center font-semibold text-sm'>
        {docs}
      </span>
      <br />
      <ul className='text-xs inline-flex space-x-2 ul-5 bg-gray-300 
                    text-black rounded-md font-bold
                    mt-4
                    px-2 py-0.5
                    '>
        {tags.map(tag=>(
          <li key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Card
