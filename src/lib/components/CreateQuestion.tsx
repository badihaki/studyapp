"use client"

import React, { useState } from 'react'

const CreateQuestion = () => {
    const [showForm, setShowForm] = useState(false);
  return (
    <>
        <button onClick={()=>setShowForm(!showForm)}>{showForm? "Hide Question Form":"Show Question Form"}</button>
        {showForm? 
            <form>
                Question: <input />
                <br />
                Subject:
                <select>
                    <option value={"JavaScript"}>Javascript</option>
                    <option value={"React"}>React</option>
                    <option value={"Angular"}>Angular</option>
                </select>
                <br />
                Official Docs: <input />
                <br />
                Notes: <input />
                <br />
            </form>
        :""}
    </>
  )
}

export default CreateQuestion
