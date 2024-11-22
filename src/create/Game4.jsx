import React from 'react'

function Game4() {
    return (
        <div className='pb-10'>
            <div className="  flex gap-5  w-full mb-3 lg:p-2 lg:justify-start justify-start items-center text-white">
                <p className="flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark">
                    Game title
                </p>
            </div>
            {[1, 2, 3, 4, 5].map((opt) => (

                <div key={opt}>

                    <p className="text-2xl  text-start capitalize font-bold text-black my-4">
                    <div className='flex justify-between items-center'>

                            <span>Question {opt}</span>
                            <span className='font-medium mb-2 text-lg'>Answer  <input type="text" autoComplete='off' placeholder='Answer' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-[100%] py-3 2xl:py-4' id='name' /></span>
                        </div>
                        <input type="text" autoComplete='off' placeholder='Question' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />

                    </p>

                    <div className="lg:flex grid grid-cols-2 w-full   gap-8  p-3">

                        <input type="text" autoComplete='off' placeholder='option' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-[30%] py-3 2xl:py-4' id='name' />
                        <input type="text" autoComplete='off' placeholder='option' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-[30%] py-3 2xl:py-4' id='name' />
                        <input type="text" autoComplete='off' placeholder='option' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-[30%] py-3 2xl:py-4' id='name' />
                        <input type="text" autoComplete='off' placeholder='option' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-[30%] py-3 2xl:py-4' id='name' />

                    </div>
                </div>
            ))}

            <p className='capitalize w-full p-3 rounded-lg bg-main-dark text-white text-center mt-5'>
                create game
            </p>
        </div>
    )
}

export default Game4