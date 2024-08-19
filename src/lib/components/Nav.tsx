"use client";

import Link from 'next/link'
import React, { useEffect } from 'react'

const Nav = () => {
  useEffect(()=>{
    console.log("hello wurld");
  },[])
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
