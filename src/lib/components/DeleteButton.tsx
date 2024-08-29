import React, { FormEvent, FormEventHandler, useState } from 'react'
import { iQuestion } from '../model/question/iquestion'
import axios from 'axios';
import { useAppDispatch } from '../redux/hooks';
import { removeQuestion } from '../redux/features/questions/questionSlice';

interface iDeleteButtonProps extends React.PropsWithChildren {
  _id: String
}

export const DeletButton: React.FC<iDeleteButtonProps> = (props) => {
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [deleteStr, setDelStr] = useState<string>("");
  const [showDelErr, setShowDelErr] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();

    function handleDeleteClick(){
    // console.log(props._id);
    setIsDeleting(!isDeleting);
    }

    const handleDeleteSubmission = async (e:FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if(deleteStr === "DELETE"){
          try{
              const idToDel = await axios.put(`api/questions/delete/${props._id}`, {id:props._id});
              // console.log(idToDel);
              dispatch(removeQuestion(idToDel.data.id))
          }
          catch(err:any){
              console.log(err);
          }
          finally{
            setLoading(false);
          }
        }
        else{
          setShowDelErr(true);
          setTimeout(() => {
            setShowDelErr(false);
            setLoading(false);
          }, 3000);
        }
    }

  return (
    <div>
        <button className="bg-red-700 text-slate-300 font-semibold rounded-full p-3 relative hover:bg-red-800 hover:text-slate-100 transition-all duration-200 disabled:bg-red-400 disabled:text-black" onClick={handleDeleteClick} disabled={isDeleting}>DELETE</button>
        {isDeleting ? 
          <div className="bg-slate-100 pb-4">
            If sure type DELETE into the dialogue box and press the delete button
            <br />
            <input name='delete' value={deleteStr} onChange={(e)=>setDelStr(e.target.value)} className='border-2 border-red-800 mx-4' />
            <br />
            <button onClick={(e)=>{
                e.preventDefault();
                setIsDeleting(false);
                }} className='bg-indigo-300 text-stone-600 font-semibold rounded-full p-3 hover:bg-indigo-800 hover:text-stone-800'>Cancel</button>
            <br />
            <button disabled={loading} onClick={handleDeleteSubmission} type='submit' className='disabled:bg-opacity-30 bg-red-700 text-slate-300 font-semibold rounded-full p-3 hover:bg-red-800 hover:text-slate-100'>{loading? "Loading..." : "Submit"}</button>
          </div>
        :
          ""
        }
        {showDelErr ? 
        <div className='text-xs text-red-800 bg-slate-100'>
          Please type {"'DELETE'"} or click the {"'Cancel'"} button
        </div>
        : ""}
    </div>
  )
}
