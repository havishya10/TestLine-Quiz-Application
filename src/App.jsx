import React from "react";
import "./App.css";

export default function App() {
  console.log("App initialized and running");
  let [quizData, setQuizData] = React.useState(null);
  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let url = "https://api.jsonserve.com/Uw5CrX";
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setQuizData(data);
    })
    .catch((error) => console.error(error));

  return <>This is a sample APP component</>;
}
