import React from "react";
import "./App.css";
import { fetchQuizData } from "./api/quizAPI";
import { AppStart } from "./pages/AppStart";
import { Navbar } from "./components/Navbar";

export default function App() {
  console.log("App initialized and running");
  let [quizData, setQuizData] = React.useState(null);

  React.useEffect(() => {
    fetchQuizData().then((data) => {
      console.log(data);
      setQuizData(data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      {/* <AppStart /> */}
    </div>
  );
}
