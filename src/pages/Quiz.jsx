import React from "react";
import { decode } from "html-entities";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Timer } from "easytimer.js";

export function Quiz({ data, questionsAnswered }) {
  let [qIndex, setQIndex] = React.useState(0);

  let [isSubmit, setIsSubmit] = React.useState(false);
  let [score, setScore] = React.useState(0);

  React.useEffect(() => {
    const timer = new Timer();
    const timerEl = document.getElementById("countdownTimer");
    timer.start({
      countdown: true,
      startValues: { minutes: parseInt(data.duration) },
    });
    timer.addEventListener("secondsUpdated", function () {
      const timeValues = timer.getTimeValues();
      timerEl.textContent = formatTime(timeValues);
      if (timerEl.textContent === "00:00") {
        document.body.style.backgroundColor = "darkred";
      }
    });

    return () => {
      timer.stop();
    };
  }, [data.duration]);

  function formatTime(timeValues) {
    const minutes = String(timeValues.minutes).padStart(2, "0");
    const seconds = String(timeValues.seconds).padStart(2, "0");
    return `${minutes}:${seconds}`;
  }

  function handleAnswer(opt, isCorrect, qid) {
    const options = opt.parentNode.querySelectorAll("li");
    const op = document.getElementById(opt.id);
    const qData = document.getElementById(qid);

    for (let i of options) {
      if (i.getAttribute("data-correct") === "false") {
        document
          .getElementById(i.id)
          .classList.add(
            "pointer-events-none",
            "cursor-not-allowed",
            "opacity-50"
          );
      } else {
        document
          .getElementById(i.id)
          .classList.add(
            "pointer-events-none",
            "cursor-not-allowed",
            "bg-emerald-400",
            "border-green-400",
            "font-bold"
          );
      }
    }
    if (isCorrect) {
      op.classList.add("bg-emerald-400", "border-green-400", "font-bold");
      op.parentNode.is_saved = true;
      document.getElementById("score").textContent = score;
    } else {
      op.classList.add("bg-red-300", "border-red-400", "text-red-800");
    }
  }

  return (
    <div className="quiz-container" id="quiz-container">
      <div className="topic-container">
        <p id="countdownTimer">00:00</p>
        <h3>Topic: {data.title}</h3>
      </div>
      <div id={data.questions[qIndex].id} className="question-container">
        <div className="question">
          <div className="q-no">
            <p>Question {qIndex + 1}</p>
            <div>
              <p>correct : 4</p>
              <p>Incorrect: 0</p>
            </div>
          </div>
          <h1>{decode(data.questions[qIndex].description)}</h1>
        </div>
        <div className="option-container">
          <ul>
            {data.questions[qIndex].options.map((opt, i) => {
              return (
                <li
                  key={opt.id}
                  className="border-1 border-slate-300 "
                  id={opt.id}
                  data-correct={opt.is_correct}
                  onClick={(e) => {
                    if (opt.is_correct) {
                      setScore((prev) => prev + 1);
                    }
                    handleAnswer(
                      e.target,
                      opt.is_correct,
                      data.questions[qIndex].id
                    );
                  }}
                >
                  {`${String.fromCharCode(65 + i)}: ${decode(opt.description, {
                    level: "html5",
                  })}`}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isSubmit ? (
        (questionsAnswered(true),
        (<h1 id="total-score">Total Score : {score * 4}/40</h1>))
      ) : (
        <div className="control-buttons">
          <p>
            {qIndex + 1}/{data.questions_count}
          </p>
          <div className="nxt-btn-container">
            <button
              id="nxt-btn"
              className="nxt-btn"
              onClick={() => {
                if (qIndex < data.questions.length - 1) {
                  setQIndex((prev) => prev + 1);
                } else {
                  setIsSubmit(true);
                }
              }}
            >
              {qIndex === data.questions.length - 1 ? "Submit" : "Next"}
            </button>
            <FaArrowRight className="nxt" />
          </div>
        </div>
      )}
    </div>
  );
}
