import React from 'react'
import { iQuestion } from '../model/question/iquestion'

interface iQuestionModalProps extends React.PropsWithChildren {
  question: iQuestion,
  modalOpen: boolean,
  onModalClose: ()=>void
}

export const QuestionModal: React.FC<iQuestionModalProps> = (props) => {
  return (
    <div>
      Modal
    </div>
  )
}
