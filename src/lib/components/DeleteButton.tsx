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
  const dispatch = useAppDispatch();

    function handleDeleteClick(){
    // console.log(props._id);
    setIsDeleting(!isDeleting);
    }

    const handleDeleteSubmission = async (e:FormEvent) => {
        e.preventDefault();
        try{
            const idToDel = await axios.put(`api/questions/delete/${props._id}`, {id:props._id});
            // console.log(idToDel);
            dispatch(removeQuestion(idToDel.data.id))
        }
        catch(err:any){
            console.log(err);
        }
    }

  return (
    <div>
        <button className="bg-red-700 text-slate-300 font-semibold rounded-full p-3 relative hover:bg-red-800 hover:text-slate-100 transition-all duration-200 disabled:bg-red-400 disabled:text-black" onClick={handleDeleteClick} disabled={isDeleting}>DELETE</button>
        <div className={`${isDeleting ? "visible":"invisible"} relative bottom-0 bg-slate-100 py-4`}>
            If sure type DELETE into the dialogue box and press the delete button
            <form onSubmit={handleDeleteSubmission}>
                <input name='delete' value={deleteStr} onChange={(e)=>setDelStr(e.target.value)} />
                <br />
                <button onClick={(e)=>{
                    e.preventDefault();
                    setIsDeleting(false);
                    }} className='bg-indigo-300 text-stone-600 font-semibold rounded-full p-3 hover:bg-indigo-800 hover:text-stone-800'>Cancel</button>
                <br />
                <button type='submit' className='bg-red-700 text-slate-300 font-semibold rounded-full p-3 hover:bg-red-800 hover:text-slate-100'>Submit</button>
            </form>
        </div>
    </div>
  )
}
