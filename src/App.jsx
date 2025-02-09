import React from "react";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { StartQuizBtn } from "./components/StartQuizBtn";
import { Quiz } from "./pages/Quiz";
import { Loader } from "./components/Loader";
import { ConfettiComponent } from "./components/ConfettiComponent";

export default function App() {
  console.log("App Initialized");
  let [quizData, setQuizData] = React.useState(null);
  let [score, setScore] = React.useState(0);
  let [startQuiz, setStartQuiz] = React.useState(false);
  let [isQuestionsAnswered, setIsQuestionsAnswered] = React.useState(false);

  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const url = "/quiz.json";
    const response = await fetch(url, options);

    if (!response.ok) {
      fetchData(); // Recalling the function if API didn't load
      return;
    }
    const data = await response.json();
    setQuizData(data);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {isQuestionsAnswered && <ConfettiComponent />}
      <Navbar />
      <main>
        <StartQuizBtn onQuizStart={(status) => setStartQuiz(status)} />
        {startQuiz &&
          (quizData ? (
            <Quiz
              data={quizData}
              questionsAnswered={(status) => setIsQuestionsAnswered(status)}
            />
          ) : (
            <Loader />
          ))}
      </main>
    </>
  );
}
