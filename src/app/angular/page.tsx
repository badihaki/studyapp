"use client"

import CardHolder from '@/lib/components/CardHolder'
import Header from '@/lib/components/Header'
import { useAppSelector } from '@/lib/redux/hooks'
import React from 'react'

function AngularPage() {
    const questions = useAppSelector(state => state.questionSlice);
    const angularQuestions = questions.filter(question => question.tags.includes("Angular"));
    return (
      <div>
          <Header text='Angular Questions' />
        <div className="w-fit mx-auto text-center justify-center">
          <CardHolder questions={angularQuestions} />
        </div>
      </div>
    )
}

export default AngularPage
