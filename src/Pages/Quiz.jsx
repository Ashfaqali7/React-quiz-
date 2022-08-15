import { Score } from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import questions from "../Config/Component/quizdata";

import "./Quiz.css";
import Quizzresult from "./quizzresult";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctans, setCorrectans] = useState(0);
  const [Score, setScore] = useState(0);
  const [showResut, setShowResult] = useState(false);
  const [clicked, setClicked] = useState();
  const [ansclick, setAnsClick] = useState(false);
  const handlePlayagain = () => {
    setShowResult(false);
    setScore(0);
    setCorrectans(0);
    setCurrentQuestion(0);
  };
  const handleClickNext = () => {
    setClicked(false);
    const nextqst = currentQuestion + 1;
    if (nextqst < questions.length) {
      setCurrentQuestion(nextqst);
    } else {
      setShowResult(true);
    }
  };
  const handleOnQuit = () => {
    setCurrentQuestion(0);
    setScore(0);
    setCorrectans(0);
  };
  const handleanswer = (isCorrect) => {
    if (isCorrect) {
      setScore(Score + 5);
      setCorrectans(correctans + 1);
    }
    setClicked(true);
    // handleClickNext();
  };
  return (
    <div className="container Body1">
      <h1 className="Heading">Quiz</h1>

      {showResut ? (
        <Quizzresult
          score={Score}
          correctans={correctans}
          handlePlayagain={handlePlayagain}
        />
      ) : (
        <>
          <div className="Question-section">
            <h2 className="question">
              {questions[currentQuestion].Questiontext}{" "}
            </h2>
          </div>
          <div className="answer-section">
            <div className="row">
              {questions[currentQuestion].Answersoptions.map((ans, i) => {
                return (
                  <div className="col-6 center">
                    <button
                      disabled={clicked}
                      onClick={() => handleanswer(ans.isCorrect)}
                      key={i}
                      className={`button-43 m-2 ${
                        clicked && ans.isCorrect ? "button-88" : "button-43 m-2"
                      } `}
                    >
                      {ans.answer}
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="actions">
              <button className="button-88" onClick={handlePlayagain}>
                Quit
              </button>
              <button
                className="button-88"
                disabled={!clicked}
                onClick={handleClickNext}
              >
                Next
              </button>
            </div>
            <div className="bottom">
              <h1>
                <span className="fs-1">{currentQuestion + 1}</span>/
                <span className="fs-2">{questions.length}</span>
              </h1>
              <h3 className="score">Score : {Score}</h3>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
