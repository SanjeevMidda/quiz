import "./index.css";

function App() {
  // create question and answers
  // track answers
  // show score at end

  const QUESTIONS = [
    {
      question: "What is the capital of France?",
      answer: "Paris",
      options: ["Lyon", "Marseille", "Paris", "Nice"],
    },
    {
      question: "What is the capital of Japan?",
      answer: "Tokyo",
      options: ["Osaka", "Kyoto", "Hiroshima", "Tokyo"],
    },
    {
      question: "What is the capital of Brazil?",
      answer: "Brasilia",
      options: ["Rio de Janeiro", "São Paulo", "Salvador", "Brasilia"],
    },
    {
      question: "WWhat is the capital of Canada?",
      answer: "Ottawa",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
    },
    {
      question: "What is the capital of Australia?",
      answer: "Canberra",
      options: ["Sydney", "Melbourne", "Brisbane", "Canberra"],
    },
    {
      question: "What is the capital of Egypt?",
      answer: "Cairo",
      options: ["Alexandria", "Giza", "Luxor", "Cairo"],
    },
    {
      question: "What is the capital of South Africa?",
      answer: "Pretoria",
      options: ["Johannesburg", "Durban", "Pretoria", "Cape Town"],
    },
    {
      question: "What is the capital of Argentina?",
      answer: "Paris",
      options: ["Córdoba", "Rosario", "Mendoza", "Buenos Aires"],
    },
  ];
  //Create UI
  return (
    <div className="App">
      <div className="mainWrapper">
        <h1>Q.1</h1>
        <div className="questionWrapper"></div>
        <div className="answerWrapper"></div>
        <button>S</button>
      </div>
    </div>
  );
}

export default App;
