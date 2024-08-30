"use client";

import Link from 'next/link'
import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks';
import { getQuestionsFromDB } from '../model/question/questionActions';
import { setAllQuestions } from '../redux/features/questions/questionSlice';
import axios from 'axios';

const Nav = () => {
  const dispatch = useAppDispatch();
  
  const getQuestions = async ()=>{
    const respone = await axios.get("/api/questions/getAll");
    // console.log(respone.data.data);
    dispatch(setAllQuestions(respone.data.data));
  }

  useEffect(()=>{
    getQuestions();
  })
  return (
      <ul className='flex justify-evenly text-xl mt-8 mb-2 bg-slate-700 bg-opacity-35 py-2 rounded-full'>
        <li className='transition-all duration-300 font-semibold font-serif rounded-full my-2 px-2 py-1 border-2 border-slate-700 bg-slate-800 hover:text-black hover:bg-slate-400 active:bg-slate-100'>
            <Link href={"/"}>Home</Link>
        </li>
        <li className='transition-all duration-300 font-semibold font-serif rounded-full my-2 px-2 py-1 border-2 border-slate-700 bg-slate-800 hover:text-black hover:bg-slate-400 active:bg-slate-100'>
            <Link href={"/react"}>React Questions</Link>
        </li>
        <li className='transition-all duration-300 font-semibold font-serif rounded-full my-2 px-2 py-1 border-2 border-slate-700 bg-slate-800 hover:text-black hover:bg-slate-400 active:bg-slate-100'>
            <Link href={"/angular"}>Angular Questions</Link>
        </li>
      </ul>
  )
}

export default Nav
