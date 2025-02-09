import React from "react";
import { decode } from "html-entities";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Timer } from "easytimer.js";
// var { Timer } = require("lib/easytimer/dist/easytimer.min.js");

export function Quiz({ data }) {
  let [qIndex, setQIndex] = React.useState(0);
  let [isQuestionAnswered, setIsQuestionAnswered] = React.useState(true);
  let [isSubmit, setIsSubmit] = React.useState(false);
  let score = [];

  React.useEffect(() => {
    const timer = new Timer();
    timer.start({
      countdown: true,
      startValues: { minutes: parseInt(data.duration) },
    });
    timer.addEventListener("secondsUpdated", function () {
      const timeValues = timer.getTimeValues();
      document.getElementById("countdownTimer").textContent =
        formatTime(timeValues);
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
      // console.log(score);
      // console.log(op.parentNode.is_saved);
    } else {
      op.classList.add("bg-red-300", "border-red-400", "text-red-800");

      // console.log(score);
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
          <p className="q-no">Question {qIndex + 1}</p>
          <h1>{decode(data.questions[qIndex].description)}</h1>
        </div>
        <div className="option-container">
          <ul>
            {data.questions[qIndex].options.map((opt) => {
              return (
                <li
                  key={opt.id}
                  className="border-1 border-slate-300 "
                  id={opt.id}
                  data-correct={opt.is_correct}
                  onClick={(e) => {
                    handleAnswer(
                      e.target,
                      opt.is_correct,
                      data.questions[qIndex].id
                    );
                  }}
                >
                  {decode(opt.description, { level: "html5" })}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {isSubmit ? (
        <h1>Total Score : {score.length * 4}</h1>
      ) : (
        <div className="control-buttons">
          <p>
            Score : <span>0</span>
          </p>
          <div className="nxt-btn-container">
            <button
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
