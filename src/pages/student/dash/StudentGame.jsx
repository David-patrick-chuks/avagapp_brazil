
import { Dialog } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DragnDrop from './games/DragnDrop';
import FillGap from './games/FillGap';
import MatchColoum from './games/MatchColoum';
import SQuiz from './games/SQuiz';
import Wordhunt from './games/Wordhunt';
function StudentGame() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {

        setOpen(!open)
    }


    useEffect(() => {
        const interval = setTimeout(() => {
            setOpen(!open)
        }, 3000)

        return () => {
            clearTimeout(interval)
        }
    }, [])



    const WinnerDialog = () => {
        return (

            <Dialog
                open={open}
                handler={handleOpen}
                size="sm"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="border-2 border-main-dark"
            >
                <div className='2xl:p-[30px]  justify-center items-center font-num w-[100%]  p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light'>
                    <img src="/student/congrat.png" className="w-[50%]" />

                    <div className="w-full flex flex-col items-center '">
                        <p className="text-main-dark font-semibold text-2xl">Congratulations</p>
                        <p className='text-xl m-1 text-[#545454] font-semibold'>2 out of 4 correct</p>
                        <p className='text-center '>You are now entered into the GRAND PRIZE of 1 bottle of your choice during tonight's party!...</p>
                    </div>
                    <p className="text-main-dark font-semibold text-2xl ">Sua pontuação</p>
                    <p className="text-main-dark font-semibold text-5xl -mt-1">80</p>

                    <p className='cursor-pointer' onClick={handleOpen}>
                        <img src="/student/social.png" className='w-28 h-fit' alt="" />
                    </p>
                </div>

            </Dialog>
        )
    }



    const param = useParams()
    const id = param.gameCreate
    // console.log(param.gameCreate);

    if (id === "createfillintheblank") {
        return (
            <div>
                <WinnerDialog />
                <FillGap />
            </div>
        )
    } else if (id === "createwordhunt") {
        return (
            <div>
                <WinnerDialog />
                <Wordhunt />
            </div>
        )
    } else if (id === "creatematchthecoloum") {
        return (
            <div>
                <WinnerDialog />
                <MatchColoum />
            </div>
        )
    } else if (id === "createquiz") {
        return (
            <div>
                <WinnerDialog />
                <SQuiz />
            </div>
        )

    } else if (id === "createdraganddrop") {
        return (
            <div>
                <WinnerDialog />
                <DragnDrop />
            </div>
        )
    }


}

export default StudentGame