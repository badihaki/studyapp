'use client'

import React from 'react'
import { useAppSelector } from '../redux/hooks'
import Card from './Card';
import { iQuestion } from '../model/question/iquestion';

const CardHolder = (props:{questions:iQuestion[]}) => {
  // const questions = useAppSelector(state => state.questionSlice);

  const cards = props.questions.map(question=>(
    <li  key={question._id.toString()} >
      <Card questionProps={question} />
    </li>
  ))

  return (
    <div>
      <ul>
        {cards}
      </ul>
    </div>
  )
}

export default CardHolder