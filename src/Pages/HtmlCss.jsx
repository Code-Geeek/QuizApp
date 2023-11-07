import React, { useState } from "react";
import "./QuesStyle.css";

function HtmlCss() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What does HTML stand for?",
      options: [
        { id: 0, text: "Hyper Text Markup Language", isCorrect: true },
        { id: 1, text: "Home Tool Markup Language", isCorrect: false },
        { id: 2, text: "Hyperlinks and Text Markup Language", isCorrect: false },
      ],
    },
    {
      text: "Who is making the Web standards?",
      options: [
        { id: 0, text: "Google", isCorrect: false },
        { id: 1, text: "Mozilla", isCorrect: false },
        { id: 2, text: "The World Wide Web Consortium", isCorrect: true },
        { id: 3, text: "Microsoft", isCorrect: false },

      ],
    },
    {
      text: "Choose the correct HTML element for the largest heading:",
      options: [
        { id: 0, text: "<head>", isCorrect: false },
        { id: 1, text: "<h1>", isCorrect: true },
        { id: 2, text: "<heading>", isCorrect: false },
        { id: 3, text: "<h6>", isCorrect: false },
      ],
    },
    {
      text: "What is the correct HTML element for inserting a line break?",
      options: [
        { id: 0, text: "<lb>", isCorrect: false },
        { id: 1, text: "<br>", isCorrect: true },
        { id: 2, text: "<break>", isCorrect: false },
      ],
    },
    {
      text: "What is the correct HTML for adding a background color?",
      options: [
        { id: 0, text: "<body style='background-color:yellow;'>", isCorrect: true },
        { id: 1, text: "<background> yellow </background>", isCorrect: false },
        { id: 2, text: "<body bg = 'yellow'", isCorrect: false },
      ],
    },
    {
      text: "What does CSS stand for?",
      options: [
        { id: 0, text: "Creative Style Sheets", isCorrect: false },
        { id: 1, text: "Computer Style Sheets", isCorrect: false },
        { id: 2, text: "Cascading Style Sheets", isCorrect: true },
        { id: 3, text: "Colorful Style Sheets", isCorrect: false },
      ],
    },
    {
      text: "What is the correct HTML for referring to an external style sheet?",
      options: [
        { id: 0, text: "<style src='mystyle.css'", isCorrect: true },
        { id: 1, text: "<stylesheetsheet>mystyle.css</stylesheet>", isCorrect: false },
        { id: 2, text: "<link rel = 'stylesheet' type = 'text/css' href = 'mystyle.css'", isCorrect: true },

      ],
    },
    {
      text: "Where in an HTML document is the correct place to refer to an external style sheet?",
      options: [
        { id: 0, text: "in the <head> section", isCorrect: true },
        { id: 1, text: "At the end of the document", isCorrect: false },
        { id: 2, text: "in the <body> section", isCorrect: false },

      ],
    },
    {
      text: "Which HTML tag is used to define an internal style sheet?",
      options: [
        { id: 0, text: "<script>", isCorrect: false },
        { id: 1, text: "<style>", isCorrect: true },
        { id: 2, text: "css", isCorrect: false },
      ],
    },
    {
      text: "Which HTML attribute is used to define inline styles?",
      options: [
        { id: 0, text: "font", isCorrect: false },
        { id: 1, text: "styles", isCorrect: false },
        { id: 2, text: "class", isCorrect: false },
        { id: 3, text: "style", isCorrect: true },
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
          <h1>HTML & CSS</h1>

          {showResults ? (
            <div className="final-results">
              <h1>Final Results</h1>
              <h2 className="mt-5">
                <span className="text-success">{score}</span> out of   <span className="text-danger">{questions.length}</span> 
              </h2>
              <button className="btn btn-danger mt-5 mb-5" onClick={() => restartGame()}>RESTART</button>
            </div>
          ) : (
            <div className="question-card">
              <h3 className="question-text">
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
              <h2>
                {currentQuestion + 1} / {questions.length}
              </h2>
            </div>
            
          )}
        </div>
        <div className="col-lg-2 d-flex justify-content-center flec-column align-items-center bg-primary">
          {/* 2. Current Score  */}
          <h2 className="text-light">Score: {score}</h2>
        </div>
      </div>
    </>
  );
}

export default HtmlCss;
