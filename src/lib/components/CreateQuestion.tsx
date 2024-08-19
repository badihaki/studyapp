"use client"

import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'
import { difficultyLevel } from '../model/iquestion';

const CreateQuestion = () => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [form, setForm] = useState<{
        question: string,
        docs: string,
        subject: string,
        notes: string,
        level: difficultyLevel
    }>({
        question: "",
        docs: "",
        subject: "JavaScript",
        notes: "",
        level: difficultyLevel.beginner
    })

    function handleFormChange(event:{target:{value:string, name:string}}):void{
        const key:string = event.target.name;
        const value:string = event.target.value;
        const updatedForm:{
            question: string,
            docs: string,
            subject: string,
            notes: string
        } = {...form};
        updatedForm[key as keyof typeof updatedForm] = value;
    }

    function handleDifficultyChange(event:{target:{value:string}}):void{
        switch (event.target.value){}
    }

  return (
    <>
        <button onClick={()=>setShowForm(!showForm)}>{showForm? "Hide Question Form":"Show Question Form"}</button>
        {showForm? 
            <form className='bg-gray-900 border space-y-2'>
                Question: <input className='text-black font-semibold' name='question' value={form.question} onChange={handleFormChange} />
                <br />
                Official Docs: <input className='text-black font-semibold' name='docs' value={form.docs} onChange={handleFormChange} />
                <br />
                Notes: <input className='text-black font-semibold' name='notes' value={form.notes} onChange={handleFormChange} />
                <br />
                Subject:
                <select className='text-black font-semibold' name='subject' value={form.subject} onChange={handleFormChange} >
                    <option value={"JavaScript"}>JavaScript</option>
                    <option value={"React"}>React</option>
                    <option value={"Angular"}>Angular</option>
                </select>
                <br />
                <button className='bg-gray-200 text-black font-semibold border-8 border-black rounded-full py-1 px-2 mx-8' type='submit'>Submit</button>
            </form>
        :""}
    </>
  )
}

export default CreateQuestion
