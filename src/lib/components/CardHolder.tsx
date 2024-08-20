'use client'

import React from 'react'
import { useAppSelector } from '../redux/hooks'
import Card from './Card';

const CardHolder = () => {
  const questions = useAppSelector(state => state.questionSlice);

  const cards = questions.map(question=>(
    <Card key={question._id.toString()} />
  ))

  return (
    <div className='flex'>
      Card Holder -- this will hold all the cards
      {cards}
    </div>
  )
}

export default CardHolder