import React from "react";
import { useParams } from "react-router-dom";
import QuizGameTwo from "../../../games/GameFour";
import FillGame from "../../../games/FillGame";
import DndElemet from "../../../games/DndElement";
import GameThree from "../../../games/GameThree";
import WordHuntGame from "../../../games/WordHunt";


function StudentGameDetails() {
  const { gameType } = useParams();
  // console.log(gameType);

  if (gameType === "fillInTheBlank") {
    return (
      <div>
        <FillGame />
      </div>
    )
  } else if (gameType === "WordHunt") {
    return (
      <div>
        <WordHuntGame />
      </div>
    );
  } else if (gameType === "matchTheColoum") {
    return (
      <div>
        <GameThree />
      </div>
    );
  } else if (gameType === "Quiz") {
    return (
      <QuizGameTwo />
    );
  } else if (gameType === "dragAndDrop") {
    return (
      <div>
        <DndElemet />
      </div>
    );
  }
}

export default StudentGameDetails;
