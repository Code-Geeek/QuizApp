import React, { useState } from "react";
import "./QuesStyle.css";
import whatsapp from '../Assets/WhatsApp_icon.png.webp'
import fb from '../Assets/Facebook_Logo_2023.png'
import { Link } from "react-router-dom";

function Node() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Node.js is written in",
      options: [
        { id: 0, text: "JavaScript", isCorrect: false },
        { id: 1, text: "C", isCorrect: false },
        { id: 2, text: "C++", isCorrect: false },
        { id: 3, text: "All of the above", isCorrect: true },
      ],
    },
    {
      text: "How modules in Node.js can be connected from one component to another ?",
      options: [
        { id: 0, text: "Expose", isCorrect: false },
        { id: 1, text: "Exports", isCorrect: true },
        { id: 2, text: "Module", isCorrect: false },
        { id: 3, text: "All of the above", isCorrect: false },

      ],
    },
    {
      text: "Which of the below modules is not a built-in module in Node.js ?",
      options: [
        { id: 0, text: "zlib", isCorrect: false },
        { id: 1, text: "HTTPS", isCorrect: false },
        { id: 2, text: "dgram", isCorrect: false },
        { id: 3, text: "fsread", isCorrect: true },
      ],
    },
    {
      text: "Which of the below command will show all the modules installed locally ?",
      options: [
        { id: 0, text: "npm ls-5", isCorrect: false },
        { id: 1, text: "npm ls", isCorrect: true },
        { id: 2, text: "node ls-g", isCorrect: false },
        { id: 3, text: "node ls", isCorrect: false },
      ],
    },
    {
      text: "Which of the below fs module is used to truncate a file ?",
      options: [
        { id: 0, text: "fs.delete(fd,len,callback)", isCorrect: false },
        { id: 1, text: "fs.remove(fd,len,callback)", isCorrect: false },
        { id: 2, text: "fs.ftruncate(fd,len,callback)", isCorrect: true },
        { id: 3, text: "None of the above", isCorrect: false }
      ],
    },
    {
      text: "Which template engines can be used with Node.js ?",
      options: [
        { id: 0, text: "Jade", isCorrect: false },
        { id: 1, text: "Vash", isCorrect: false },
        { id: 2, text: "Handlebars", isCorrect: false },
        { id: 3, text: "All of the above", isCorrect: true },
      ],
    },
    {
      text: "How do we return a path string from the given path object in Node.js ?",
      options: [
        { id: 0, text: "path.get()", isCorrect: false },
        { id: 1, text: "path.set()", isCorrect: false },
        { id: 2, text: "path.format()", isCorrect: true },
        { id: 3, text: "path.return()", isCorrect: false },

      ],
    },
    {
      text: "What is the default scope in the Node.js application ?",
      options: [
        { id: 0, text: "Global", isCorrect: false },
        { id: 1, text: "Local", isCorrect: true },
        { id: 2, text: "Global Function", isCorrect: false },
        { id: 3, text: "Local to object", isCorrect: false },
      ],
    },
    {
      text: "Which of the below method is used to return the current working directory of the process ?",
      options: [
        { id: 0, text: "cwd();", isCorrect: true },
        { id: 1, text: "cmd();", isCorrect: false },
        { id: 2, text: "pwd();", isCorrect: false },
        { id: 3, text: "None of the above", isCorrect: false },
      ],
    },
    {
      text: "Which below method is used to check whether the given path is an absolute path or not in Node.js ?",
      options: [
        { id: 0, text: "path.Query()", isCorrect: false },
        { id: 1, text: "path.render()", isCorrect: false },
        { id: 2, text: "path.isAbsolute()", isCorrect: true },
        { id: 3, text: "path.Absolute()", isCorrect: false },
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
          <h1>Node JS</h1>

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
              <a href="whatsapp://send?text=Quiz.itExercise your brain with these basic quizzes.Play now:https://quiz-app-roan-tau.vercel.app/"><img style={{width:'25px'}} src={whatsapp} alt="" /></a>
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

export default Node;

