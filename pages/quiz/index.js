import Link from "next/link";
import { quiz } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  return (
    <>
      <h1>Quiz</h1>
      <p>NextJS Quiz App</p>
      <ul>
        {quiz.map((element, index) => (
          <li key={index}>
            <Link href={`/quiz/${quiz[index].slug}`}>
              <p>Question {index}</p>
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          function getRandomElement(array) {
            return array[Math.floor(Math.random() * array.length)];
          }
          router.push(`/quiz/${getRandomElement(quiz).slug}`);
        }}
      >
        Get Random Question
      </button>
    </>
  );
}
