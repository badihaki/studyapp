"use client"

import CardHolder from "@/lib/components/CardHolder";
import Header from "@/lib/components/Header"
import { useAppSelector } from "@/lib/redux/hooks"

function ReactPage() {
    const questions = useAppSelector(state => state.questionSlice);
    const reactQuestions = questions.filter(question => question.tags.includes("React"));
    return (
      <main id="react-questions">
          <Header text="React Questions" />
          <div className="w-fit mx-auto text-center justify-center">
            <CardHolder questions={reactQuestions} />
          </div>
      </main>
    )
}

export default ReactPage