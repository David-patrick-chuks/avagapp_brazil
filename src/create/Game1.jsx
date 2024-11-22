import React from 'react'

function Game1() {
    return (
        <div className='pb-10'>
            <div className="  flex gap-5  w-full mb-3 lg:p-2 lg:justify-start justify-start items-center text-white">
                {/* <p className="font-bold lg:text-[20px] text-black">
                    Create Game
                    <img
                        src="/student/bulb.png"
                        className="inline-block my-auto"
                        alt=""
                    />
                </p> */}

                <p className="flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark">
                    Game title
                </p>
            </div>
            {[1, 2, 3, 4, 5].map((opt) => (

                <div key={opt}>

                    <p className="text-2xl  text-start capitalize font-bold text-black my-4">
                        <span>Question {opt}</span>
                        <input type="text" autoComplete='off' placeholder='Question' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />

                    </p>

                    <div className="lg:flex grid grid-cols-2 w-full h-80 lg:h-64  gap-4 justify-between p-3">
                        {[1, 2, 3, 4].map((option) => (
                            <div
                                key={option}
                                className={`flex items-center capitalize  w-full justify-center text-center relative h-full  cursor-pointer p-4 bg-main-light  text-main-dark text-xl lg:text-3xl font-bold rounded-lg mb-2 `}

                            >
                                <span>  <textarea
                                    style={{ resize: "none" }} rows={2} type="text" autoComplete='off' placeholder='option' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454]  bg-transparent border-2 outline-none border-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' /></span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
             <p className='capitalize w-full p-3 rounded-lg bg-main-dark text-white text-center mt-5'>
                create game
            </p>
        </div>
    )
}

export default Game1