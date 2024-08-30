'use client'

import CardHolder from "@/lib/components/CardHolder";
import Header from "@/lib/components/Header";
import { useAppSelector } from "@/lib/redux/hooks";

export default function Home() {
  const questions = useAppSelector(state => state.questionSlice);

  return (
    <main className="justify-center w-full h-full">
      <Header text="Study App Home" />
      <div className="w-fit mx-auto text-center justify-center">
        <CardHolder questions={questions} />
      </div>
    </main>
  );
}
