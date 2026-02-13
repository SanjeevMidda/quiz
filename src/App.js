import { useState } from "react";
import "./index.css";

function App() {
  // show score at end

  const QUESTIONS = [
    {
      questionNo: 1,
      question: "What is the capital of France?",
      answer: "Paris",
      options: ["Lyon", "Marseille", "Paris", "Nice"],
    },
    {
      questionNo: 2,
      question: "What is the capital of Japan?",
      answer: "Tokyo",
      options: ["Osaka", "Kyoto", "Hiroshima", "Tokyo"],
    },
    {
      questionNo: 3,
      question: "What is the capital of Brazil?",
      answer: "Brasilia",
      options: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasilia"],
    },
    {
      questionNo: 4,
      question: "WWhat is the capital of Canada?",
      answer: "Ottawa",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    },
    {
      questionNo: 5,
      question: "What is the capital of Australia?",
      answer: "Canberra",
      options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    },
    {
      questionNo: 6,
      question: "What is the capital of Egypt?",
      answer: "Cairo",
      options: ["Alexandria", "Giza", "Luxor", "Cairo"],
    },
    {
      questionNo: 7,
      question: "What is the capital of South Africa?",
      answer: "Pretoria",
      options: ["Johannesburg", "Durban", "Pretoria", "Cape Town"],
    },
    {
      questionNo: 8,
      question: "What is the capital of Argentina?",
      answer: "Paris",
      options: ["Córdoba", "Rosario", "Mendoza", "Buenos Aires"],
    },
  ];

  const [answerSelected, setAnswerSelected] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);

  const nextQuestion = () => {
    setQuestionNumber(questionNumber + 1);
  };

  //Create UI
  return (
    <div className="App">
      <div className="mainWrapper">
        <h1>Q.{questionNumber + 1}</h1>
        <div className="questionWrapper">
          {QUESTIONS[questionNumber].question}
        </div>
        <div className="answerWrapper"></div>
        <button onClick={nextQuestion}>S</button>
      </div>
    </div>
  );
}

export default App;
