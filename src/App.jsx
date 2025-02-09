import React from "react";
import "./App.css";

import { Navbar } from "./components/Navbar";
import { Quiz } from "./pages/Quiz";
import { Loader } from "./components/Loader";
export default function App() {
  console.log("App Initialized");
  let [quizData, setQuizData] = React.useState(null);
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
      fetchData(); // Recall the function if API didn't load
      return;
    }
    const data = await response.json();
    setQuizData(data);
  };
  React.useEffect(() => {
    fetchData();
  }, []); // Runs only once when the component mounts

  // React.useEffect(() => {
  //   fetch(url, options)
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //       setQuizData(data);
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <main>{quizData ? <Quiz data={quizData} /> : <Loader />}</main>
    </>
  );
}
