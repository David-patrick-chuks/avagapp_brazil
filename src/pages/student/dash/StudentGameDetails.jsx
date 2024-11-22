import React from "react";
import { useLocation, useParams } from "react-router-dom";
import QuizGameTwo from "../../../games/GameFour";
import FillGame from "../../../games/FillGame";
import DndElemet from "../../../games/DndElement";
import GameThree from "../../../games/GameThree";
import WordHuntGame from "../../../games/WordHunt";
import Game1 from "../../../create/Game1";
import Game2 from "../../../create/Game2";
import Game3 from "../../../create/Game3";
import Game4 from "../../../create/Game4";
import Game5 from "../../../create/Game5";


function StudentGameDetails() {
  const { gameType } = useParams();
  const location = useLocation()
  const create = location.pathname.includes("student")

  // console.log(gameType);

  if (gameType === "fillInTheBlank") {
    return (
      <div>
        {create ? <FillGame />
          : <Game2 />}   </div>
    )
  } else if (gameType === "WordHunt") {
    return (
      <div>
        {create ? <WordHuntGame /> : <Game5 />}
      </div>
    );
  } else if (gameType === "matchTheColoum") {
    return (
      <div>
        {create ? <GameThree />
          : <Game4 />}    </div>
    );
  } else if (gameType === "Quiz") {
    return (
     <div>
       { create?<QuizGameTwo /> :  <Game1 />}
     </div>);
} else if (gameType === "dragAndDrop") {
  return (
    <div>
      {create ? <DndElemet />
        : <Game3 />}   </div>
  );
}
}

export default StudentGameDetails;
