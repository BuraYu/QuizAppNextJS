import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>QuizApp</h1>
      <Link href="/quiz">Click here to start the quiz</Link>
    </div>
  );
}
