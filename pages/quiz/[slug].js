import Link from "next/link";
import { useRouter } from "next/router.js";
import { quiz } from "../../lib/data";
import { useEffect, useState } from "react";

export default function Quiz() {
  const router = useRouter();
  const { slug } = router.query;

  const quizIndex = quiz.findIndex((question) => question.slug === slug);

  const nextQuiz = quiz[quizIndex + 1];
  const previousQuiz = quiz[quizIndex - 1];

  if (quizIndex < 0 || !quiz[quizIndex]) {
    return null;
  }

  const [hide, setHide] = useState(false);

  return (
    <>
      <Link href="/quiz">← All Question</Link>
      <h1>Quiz</h1>
      <ul className="container">
        <li>
          <h2>Question</h2>
          <p>{quiz[quizIndex].question}</p>
          {hide && <p>{quiz[quizIndex].answer}</p>}
          <button onClick={() => setHide(!hide)}>Show answer</button>
        </li>
      </ul>

      <div>
        {previousQuiz ? (
          <Link href={`/quiz/${previousQuiz.slug}`}>
            ← Previous Question: {previousQuiz.title}
          </Link>
        ) : null}
      </div>
      <div>
        {nextQuiz ? (
          <Link href={`/quiz/${nextQuiz.slug}`}>
            Next Question: {nextQuiz.title} →
          </Link>
        ) : null}
      </div>
    </>
  );
}
