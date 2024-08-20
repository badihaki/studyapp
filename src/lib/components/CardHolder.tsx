'use client'

import React from 'react'
import { useAppSelector } from '../redux/hooks'
import Card from './Card';

const CardHolder = () => {
  const questions = useAppSelector(state => state.questionSlice);

  const cards = questions.map(question=>(
    <li  key={question._id.toString()} >
      <Card questionProps={question} />
    </li>
  ))

  return (
    <div className='flex'>
      <ul>
        {cards}
      </ul>
    </div>
  )
}

export default CardHolder