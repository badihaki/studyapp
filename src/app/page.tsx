'use client'

import CardHolder from "@/lib/components/CardHolder";
import Header from "@/lib/components/Header";
import SearchBar from "@/lib/components/SearchBar";
import { setInit } from "@/lib/redux/features/userConfig/userConfigSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { useEffect, useState } from "react";

export default function Home() {
  const questions = useAppSelector(state => state.questionSlice);
  const userConfig = useAppSelector(state => state.userConfigSlice);
  const dispatch = useAppDispatch();

  const [searchQuery, setSearchQuery] = useState<string>("");
  
  const filteredQuestions = questions.filter((q)=>{
    if(q.question.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) || q.tags.map(tag=>tag.toLowerCase()).includes(searchQuery.toLowerCase()) || q.docs.toLowerCase().includes(searchQuery.toLowerCase()) || q.notes.includes(searchQuery)){
      return q
    }
  });

  useEffect(()=>{
    if(!userConfig.init){
      setTimeout(() => {
        if(!userConfig.init){
          dispatch(setInit(true));
        }
      }, 35000);
    }
  },[dispatch, userConfig.init])

  function IntroText(){
    return (
      <section id="introduction" className="px-14 py-5">
        <p>
          Welcome to the <span className="font-mono text-lg text-red-600">Study App</span>. Here you can submit a question to our growling list of interview 
          questions by using the <span className="font-mono text-lg text-red-600">Show Question Form</span> button above this menu. The form to add a new question is accessible 
          on any page, so if you are looking for a specific question and {"don't"} see it on {"it's"} respective pages, you can add it on there.
        </p>
        <p className="pt-3">
          Speaking of {"'Respective Pages'"}, you can navigate to specific pages for <span className="font-mono text-lg text-red-600">React</span> or 
          <span className="font-mono text-lg text-red-600">Angular</span> using to menu above.
        </p>
        <p className="pt-3">
          If you want to search through the questions, or just filter out questions of a given subject, you can always use the <span className="font-mono text-lg text-red-600">Search Bar </span> 
          underneath this message. This search will filter through the questions, themselves, the docs, the tags these questions are listed under, and even their notes, so it should be pretty 
          inclusive.
        </p>
        <p className="pt-3">
          This message will disappear after a few seconds, but <span className="font-mono text-lg text-red-600">if you get it and want this message to disappear</span>, please <button onClick={()=>dispatch(setInit(true))}
          className="border-2 bg-red-700 bg-opacity-40 mx-4 px-2 py-1 rounded-full">click here</button>
        </p>
      </section>
    )
  }

  function ReturningText(){
    return(
      <section id="introduction-2">
        <p>
          Repository of interview questions for those pursuring a career in web development
        </p>
      </section>
    )
  }

  return (
    <main className="justify-center w-full h-full">
      <Header text="Study App Home" />
      
      <div className="bg-slate-600 font-semibold w-2/3 mx-auto my-2 rounded-full py-2 px-6 text-center">
        {
          userConfig.init ? <ReturningText /> : <IntroText />
        }
      </div>

      <div>
        <SearchBar searchQueryValue={searchQuery} changeSearchQuery={setSearchQuery} />
      </div>
      <div className="w-fit mx-auto text-center justify-center">
        <CardHolder questions={filteredQuestions} />
      </div>
    </main>
  );
}
