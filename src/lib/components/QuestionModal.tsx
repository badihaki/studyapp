import React from 'react'
import { iQuestion } from '../model/question/iquestion'

interface iQuestionModalProps extends React.PropsWithChildren {
  question: iQuestion,
  modalOpen: boolean,
  onModalClose: ()=>void
}

export const QuestionModal: React.FC<iQuestionModalProps> = (props) => {
  const { question, docs, tags, notes, difficulty } = props.question;
  
  return (
    <div className={`fixed inset-0 mx-auto my-auto flex justify-center transition-colors duration-700 ease-in-out h-5/6 w-10/12 text-black font-serif ${props.modalOpen? "visible bg-slate-300 border-4 border-stone-300 rounded-lg z-40":"invisible z-0 pointer-events-none"}`}>
      <button onClick={props.onModalClose} className='absolute right-4 top-1 bg-red-500 border-4 border-red-600 text-stone-900 font-bold text-lg px-3 rounded-full'>X</button>
      <div className='mt-16 justify-center items-center'>
        <div className='justify-center items-center my-auto font-bold text-red-600 mx-auto p-4'>
          {question}
        </div>
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus nulla et voluptas exercitationem maiores atque a inventore, rerum quidem, provident, corrupti dolorum unde amet! Quas molestias magni repellendus totam fuga.
      </div>
    </div>
  )
}
