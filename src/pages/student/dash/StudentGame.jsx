
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DragnDrop from './games/DragnDrop';
import FillGap from './games/FillGap';
import SQuiz from './games/SQuiz';
import MatchColoum from './games/MatchColoum';
import Wordhunt from './games/Wordhunt';
function StudentGame() {
    

    const param = useParams()
    const id = param.gameCreate
    // console.log(param.gameCreate);

    if (id === "createfillintheblank") {
        return (
            <div>
                <FillGap />
            </div>
        )
    } else if (id === "createwordhunt") {
        return (
            <div>
                <Wordhunt />
            </div>
        )
    } else if (id === "creatematchthecoloum") {
        return (
            <div>
               <MatchColoum />
            </div>
        )
    } else if ( id === "createquiz") {
        return (
            <div>
                <SQuiz />
            </div>
        )

    } else if (id === "createdraganddrop") {
        return (
            <div>
                <DragnDrop />
            </div>
        )
    }


}

export default StudentGame