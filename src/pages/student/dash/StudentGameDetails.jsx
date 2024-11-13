import React from "react";
import { useParams } from "react-router-dom";
import FillGame from "../../../../Games/fillGame";
import QuizGameTwo from "../../../../Games/Game4";

function StudentGameDetails() {
  const { gameType } = useParams();
  console.log(gameType);

  if (gameType === "fillInTheBlank") {
    return (
      <div>
        <FillGame />
      </div>
    )
  } else if (gameType === "wordhunt") {
    return (
      <div>
        helllo
      </div>
    );
  } else if (gameType === "matchthecoloum") {
    return (
      <div>
        hello
      </div>
    );
  } else if (gameType === "Quiz") {
    return (
      <QuizGameTwo />
    );
  } else if (gameType === "draganddrop") {
    return (
      <div>
        hello
      </div>
    );
  }
}

export default StudentGameDetails;
