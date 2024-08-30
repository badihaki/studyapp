'use client'

import CardHolder from "@/lib/components/CardHolder";
import Header from "@/lib/components/Header";
import SearchBar from "@/lib/components/SearchBar";
import { useAppSelector } from "@/lib/redux/hooks";
import { useState } from "react";

export default function Home() {
  const questions = useAppSelector(state => state.questionSlice);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredQuestions = questions.filter((q)=>{
    if(q.question.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()) || q.tags.map(tag=>tag.toLowerCase()).includes(searchQuery.toLowerCase()) || q.docs.toLowerCase().includes(searchQuery.toLowerCase()) || q.notes.includes(searchQuery)){
      return q
    }
  });

  return (
    <main className="justify-center w-full h-full">
      <Header text="Study App Home" />
      <div>
        <SearchBar searchQueryValue={searchQuery} changeSearchQuery={setSearchQuery} />
      </div>
      <div className="w-fit mx-auto text-center justify-center">
        <CardHolder questions={filteredQuestions} />
      </div>
    </main>
  );
}
