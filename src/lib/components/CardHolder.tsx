'use client'

import React from 'react'
import { useAppSelector } from '../redux/hooks'
import Card from './Card';
import { iQuestion } from '../model/question/iquestion';

const CardHolder = (props:{questions:iQuestion[]}) => {
  // const questions = useAppSelector(state => state.questionSlice);

  const cards = props.questions.map(question=>(
    <li id={`question-card-${question._id}`} aria-label='Question Card'  key={question._id.toString()} >
      <Card questionProps={question} />
    </li>
  ))

  return (
    <div id='question-container'>
      <ul id='question-card-holder' role='card-holder' aria-label='Container for all questions'>
        {cards}
      </ul>
    </div>
  )
}

export default CardHolder