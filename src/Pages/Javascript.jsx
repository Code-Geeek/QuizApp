import React, { useState } from "react";
import "./QuesStyle.css";
import whatsapp from '../Assets/WhatsApp_icon.png.webp'
import fb from '../Assets/Facebook_Logo_2023.png'
import { Link } from "react-router-dom";

function Javascript() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Inside which HTML element do we put the JavaScript?",
      options: [
        { id: 0, text: "<js>", isCorrect: false },
        { id: 1, text: "<javascript>", isCorrect: false },
        { id: 2, text: "<script>", isCorrect: true },
        { id: 3, text: "<scripting>", isCorrect: false },
      ],
    },
    {
      text: "Where is the correct place to insert a JavaScript?",
      options: [
        { id: 0, text: "Both the <head> section and  the <body> section are correct", isCorrect: true },
        { id: 1, text: "The <body> section", isCorrect: false },
        { id: 2, text: "The <head> section", isCorrect: false },
      ],
    },
    {
      text: "The external JavaScript file must contain the <script> tag.",
      options: [
        { id: 0, text: "False", isCorrect: true },
        { id: 1, text: "True", isCorrect: false },
      ],
    },
    {
      text: "How do you write Hello World in an alert box?",
      options: [
        { id: 0, text: "msg('Hello World');", isCorrect: false },
        { id: 1, text: "alert('Hello World');", isCorrect: true },
        { id: 2, text: "alertBox('Hello World');", isCorrect: false },
        { id: 3, text: "msgBox('Hello World');", isCorrect: false },
      ],
    },
    {
      text: "How do you create a function in JavaScript?",
      options: [
        { id: 0, text: "function:myFunction()", isCorrect: true },
        { id: 1, text: "function=myFunction()", isCorrect: false },
        { id: 2, text: "function myFunction()", isCorrect: false },
      ],
    },
    {
      text: "How do you call a function named 'muFunction'?",
      options: [
        { id: 0, text: "call function myFunction()", isCorrect: false },
        { id: 1, text: "myFunction()", isCorrect: true },
        { id: 2, text: "call myFunction()", isCorrect: false },
      ],
    },
    {
      text: "How do you write IF statement in JavaScript?",
      options: [
        { id: 0, text: "if (i==5)", isCorrect: true },
        { id: 1, text: "if i=5 then", isCorrect: false },
        { id: 2, text: "if i==5 then", isCorrect: false },
        { id: 1, text: "if i=5", isCorrect: false },

      ],
    },
    {
      text: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      options: [
        { id: 0, text: "if (i<>5)", isCorrect: false },
        { id: 1, text: "if i=!5 then", isCorrect: false },
        { id: 2, text: "if i<>5 then", isCorrect: false },
        { id: 1, text: "if (i!=5)", isCorrect: true },

      ],
    },
    {
      text: "How does a WHILE loop start?",
      options: [
        { id: 0, text: "while (i<=10)", isCorrect: true },
        { id: 1, text: "while (i<=10;i++)", isCorrect: false },
        { id: 2, text: "while i= 1 to 10", isCorrect: false },
      ],
    },
    {
      text: "How does a FOR loop start?",
      options: [
        { id: 0, text: "for (i=0;i<5)", isCorrect: false },
        { id: 1, text: "for (i<5;i++)", isCorrect: false },
        { id: 1, text: "for i= 1 to 5", isCorrect: false },
        { id: 2, text: "for (i=0;i<=5;i++)", isCorrect: true },
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
          <h1>JavaScript</h1>

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
                <img style={{width:'25px'}} src={whatsapp} alt="" />
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

export default Javascript;
