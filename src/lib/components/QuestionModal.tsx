import React, { ChangeEvent, FormEvent, useState } from 'react'
import { iQuestion } from '../model/question/iquestion'
import { DeletButton } from './DeleteButton';

interface iQuestionModalProps extends React.PropsWithChildren {
  question: iQuestion,
  modalOpen: boolean,
  onModalClose: ()=>void
}
// pressing the 'close' button should also switch the state
export const QuestionModal: React.FC<iQuestionModalProps> = (props) => {
  const { _id, question, docs, tags, notes, difficulty } = props.question;
  const [inEditMode, setInEditMode] = useState<boolean>(false);
  
  const initialState:iQuestion = {
    _id,
    question,
    docs,
    tags,
    notes,
    difficulty
  }
  interface iQuestionStringsForm{
    question:string,
    docs:string,
  }
  interface iQuestionArraysForm{
    tags: string[],
    notes: string[]
  }
  const [stringForm, setStringsForm] = useState<iQuestionStringsForm>(initialState);
  const [arrayForm, setArrForm] = useState<iQuestionArraysForm>(initialState);
  const resetForm = ()=> {
    setStringsForm(initialState);
    setArrForm(initialState);
  }

  const handleFormChange = (e:{target:{name:string, value:string}})=>{
    const key = e.target.name;
    const value = e.target.value;

    console.log(`${key}(key): ${value}(value)`);
    const newForm:iQuestionStringsForm = {...stringForm};
    newForm[key as keyof typeof newForm] = value;
    setStringsForm(newForm);
  }

  function NoteListElement(props:{text:string}){
    const handleDeleteClick = (e:FormEvent)=>{
      const newNotes = arrayForm.notes.filter(note=>{
        return note !== note;
      })
      const newArrForm = {...arrayForm};
      newArrForm.notes = newNotes;
      setArrForm(newArrForm);
    }
    
    return(
      <li className='grid grid-cols-2 my-2 border-2 border-slate-200 px-2 pt-2 pb-1 rounded-lg'>
        {props.text}
        {inEditMode?
          <button onClick={handleDeleteClick} className='bg-red-700 border-4 border-red-800 text-slate-100 w-fit h-fit px-2 rounded-full ml-5 font-bold '>X</button>
          :
          ""
        }
      </li>
    )
  }
  
  const handleSubmitEdits = async (e:FormEvent)=>{
    e.preventDefault();
    const edits:iQuestion = {
      _id:props.question._id,
      question: stringForm.question,
      docs:stringForm.docs,
      tags:arrayForm.tags,
      notes:arrayForm.notes,
      difficulty:props.question.difficulty
    }
    console.log(edits);
  }

  return (
    <form onSubmit={handleSubmitEdits}>

      <div className={`fixed inset-0 mx-auto my-auto flex justify-center transition duration-700 ease-in-out h-5/6 w-10/12 text-black font-serif ${props.modalOpen? "visible bg-slate-300 border-4 border-stone-300 rounded-lg z-40":"invisible z-0 pointer-events-none"}`}>

        {/* Close modal button */}
        <button onClick={(e)=>{
          e.preventDefault();
          if(inEditMode){
            setInEditMode(false);
          }
          props.onModalClose();
        }} className='absolute right-4 top-1 bg-red-500 border-4 border-red-600 text-stone-900 font-bold text-lg px-3 rounded-full text-center'>X</button>
        
        {/* Edit mode button */}
        <button onClick={(e)=>{
          e.preventDefault();
          if(inEditMode){
            resetForm();
          }
          setInEditMode(!inEditMode);
          }} className={`absolute right-20 top-1 bg-indigo-400 border-4 border-blue-500 font-bold w-fit h-fit px-3 py-1 rounded-full text-center`} >{ inEditMode ? "Cancel Edits" : "Edit" }</button>
        
        {/* Question Info Container */}
        <div className='mt-16 justify-center items-center bg-slate-800 bg-opacity-45 mx-auto px-10 my-auto'>
          
          {/* Question */}
          <div className='justify-center text-center my-auto font-bold text-red-600 mx-auto p-4 text-3xl'>
            <span className='text-black font-sans'>Question:</span>
            <br />
            {inEditMode?
            <input name='question' value={stringForm.question} onChange={handleFormChange} className='border-2 border-slate-400 text-black font-normal text-base py-1 px-2' /> 
            : 
            question}
          </div>

          {/* Docs */}
          <div className='mt-3 mb-6 mx-auto text-center'>
            <span className='font-bold font-sans text-lg'>Documentation:</span>
            <br />
            {inEditMode ?
            <input name='docs' value={stringForm.docs} onChange={handleFormChange} className='border-2 border-slate-400 text-black font-normal text-base py-1 px-2 w-full' />
          :
            docs  
          }
          </div>
          
          {/* Notes are below */}
          <div className='my-4 mt-8 font-light border-4 border-stone-400 rounded-lg p-2 bg-stone-300'>
            <span className='font-bold'>Submitted Notes:</span>
            <ul className='text-sm list-disc list-inside'>
              {arrayForm.notes.map(note=><NoteListElement key={`${props.question._id}-note-${note.slice(0,3)}`} text={note} />)}
            </ul>
          </div>
          
          {/* Tags */}
          <div className='my-4 mt-8 font-light border-4 border-stone-400 rounded-lg p-2 bg-stone-300'>
            <span className='font-bold'>Tags: </span>
            <ul className='mt-1 text-sm list-disc list-inside'>
              {tags.map(tag=> <li key={tag+_id}>{tag}</li>)}
            </ul>
          </div>
          {/* <div className='my-4 mt-8 font-light border-4 border-stone-400 rounded-lg p-2 bg-stone-300'>
            Difficulty: <span className='font-semibold text-red-700'>{difficulty}</span>
          </div> */}
          {
            inEditMode ? 
            <div className='w-full text-center'>
              <button type='submit' className='bg-indigo-400 border-4 border-blue-500 font-bold w-fit h-fit px-3 py-1 rounded-full text-center'>Submit Edits</button>
            </div>
            : 
            <div className='relative h-fit w-fit p-4 -bottom-10 text-center border-4 border-red-600 bg-rose-500 mx-auto'>
            <div className='font-semibold text-red-800 bg-opacity-35 bg-slate-500 w-fit mx-auto text-center mb-4'>
              DANGER
            </div>
            {props.modalOpen ? <DeletButton _id={props.question._id} /> : "" }
          </div>
          }
        </div>
      </div>

    </form>
  )
}
