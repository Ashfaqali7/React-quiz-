import React from "react";
import "./Quiz.css";
import questions from "../Config/Component/quizdata";
function Quizzresult(props) {
  return (
    <div className="container">
      <div className="result">
        <h1>Complete 👍</h1>
        <h3>
          Total Score : {props.score}/{questions.length * 5}{" "}
        </h3>
        <h3>
          Correct {props.correctans} out of {questions.length}{" "}
        </h3>
        <div className="playagain">
          <button
            className="button-43 m-3 w-25  "
            onClick={props.handlePlayagain}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quizzresult;
