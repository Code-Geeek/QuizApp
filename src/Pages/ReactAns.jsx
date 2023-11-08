import React, { useState } from "react";
import "./QuesStyle.css";
import wp from '../Assets/WhatsApp_icon.png.webp'
import fb from '../Assets/Facebook_Logo_2023.png'
import { Link } from "react-router-dom";

function ReactAns() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the correct command to create a new React project?",
      options: [
        { id: 0, text: "npm create-react-app myReactApp", isCorrect: false },
        { id: 1, text: "npx create-react-app myReactApp", isCorrect: true },
        { id: 2, text: "npx create-react-app", isCorrect: false },
        { id: 3, text: "npm create-react-app", isCorrect: false },
      ],
    },
    {
      text: "What command is used to start the React local development server?",
      options: [
        { id: 0, text: "npm run dev", isCorrect: false },
        { id: 1, text: "npm start", isCorrect: true },
        { id: 2, text: "npm serve", isCorrect: false },
        { id: 3, text: "npm build", isCorrect: false },

      ],
    },
    {
      text: "What is the default local host port that a React development server uses?",
      options: [
        { id: 0, text: "3500", isCorrect: false },
        { id: 1, text: "5000", isCorrect: false },
        { id: 2, text: "3000", isCorrect: true },
        { id: 3, text: "8080", isCorrect: false },
      ],
    },
    {
      text: "To develop and run React code, Node.js is required.",
      options: [
        { id: 0, text: "True", isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
      ],
    },
    {
      text: "What is the children prop?",
      options: [
        { id: 0, text: "A property that lets you to pass data to child components", isCorrect: false },
        { id: 1, text: "A property that lets you nest components in other components", isCorrect: true },
        { id: 2, text: "A property that lets you set an object as a property", isCorrect: false },
        { id: 3, text: "A property that adds child values to state", isCorrect: false }
      ],
    },
    {
      text: "Which keyword creates a constant in JavaScript?",
      options: [
        { id: 0, text: "const", isCorrect: true },
        { id: 1, text: "var", isCorrect: false },
        { id: 2, text: "let", isCorrect: false },
        { id: 3, text: "constant", isCorrect: false },
      ],
    },
    {
      text: "A copy of the 'real' DOM that is kept in memory is called what?",
      options: [
        { id: 0, text: "DOM", isCorrect: false },
        { id: 1, text: "Shadow DOM", isCorrect: false },
        { id: 2, text: "Virtual DOM", isCorrect: true },
        { id: 3, text: "React DOM", isCorrect: false },

      ],
    },
    {
      text: "What tool does React use to compile JSX?",
      options: [
        { id: 0, text: "Babel", isCorrect: true },
        { id: 1, text: "JSX Compiler", isCorrect: false },
        { id: 2, text: "ReactDOM", isCorrect: false },
        { id: 3, text: "ReactRouter", isCorrect: false },
      ],
    },
    {
      text: "React component names must begin with an uppercase letter.",
      options: [
        { id: 0, text: "True", isCorrect: true },
        { id: 1, text: "False", isCorrect: false },
      ],
    },
    {
      text: "Which operator can be used to conditionally render a React component?",
      options: [
        { id: 0, text: "||", isCorrect: false },
        { id: 1, text: "&&", isCorrect: true },
        { id: 2, text: "::", isCorrect: false },
        { id: 3, text: "??", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    // score ++
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <>
            <div className="row" style={{height:'680px'}}>
        <div className="col-lg-10 mt-5">
          <h1>REACT</h1>

          {showResults ? (
            <div className="final-results">
              <h1 className="text-light">Your score is </h1>
              <h2 className="mt-5 text-light">
                {score} out of   {questions.length}
              </h2>
              <button className="btn btn-danger mt-5 mb-5" onClick={() => restartGame()}>RESTART</button>
              <Link to={'/questions'}><button className="btn ms-3"><i class="fa-solid fa-arrow-right"></i></button></Link>
              <h5 className="text-light">Share your Acheivement</h5>
              <div>
              <a href="whatsapp://send?text=http://localhost:3000/"><img style={{width:'25px'}} src={wp} alt="" /></a>
                <img className="ms-3" style={{width:'20px'}} src={fb} alt="" />
              </div>
            </div>
          ) : (
            <div className="question-card">
              <h3 className="question-text text-light mt-2">
                {questions[currentQuestion].text}
              </h3>

              <ul>
                {questions[currentQuestion].options.map((option) => {
                  return (
                    <li
                      key={option.id}
                      onClick={() => optionClicked(option.isCorrect)}
                    >
                      {option.text}
                    </li>
                  );
                })}
              </ul>
              <h5 className="text-light">
                {currentQuestion + 1} / {questions.length}
              </h5>
            </div>
            
          )}
        </div>
        <div className="col-lg-2 d-flex justify-content-center flec-column align-items-center">
          {/* 2. Current Score  */}
          <h2 className="text-light">Score: {score}</h2>
        </div>
      </div>
    </>
  );
}

export default ReactAns;

