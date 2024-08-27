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
    console.log(respone.data.data);
  }

  useEffect(()=>{
    // getQuestionsFromDB().then(data=>{
    //   // console.log("getting questions");
    //   const response = JSON.parse(data);
    //   console.log("setting all questions:");
    //   console.log(response);
    //   dispatch(setAllQuestions(response));
    // })
    getQuestions();
  }, [])
  return (
      <ul className='flex justify-evenly text-xl my-8'>
        <li>
            <Link href={"/"}>Home</Link>
        </li>
        <li>
            <Link href={"/"}>React Questions</Link>
        </li>
        <li>
            <Link href={"/"}>Angular Questions</Link>
        </li>
      </ul>
  )
}

export default Nav
