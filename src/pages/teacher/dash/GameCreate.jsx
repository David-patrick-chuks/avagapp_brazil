import { Option, Radio, Select } from "@material-tailwind/react";
import React, { useState } from 'react';
import { MdOutlineFileUpload } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { columnData, quizData } from '../../../../helper/data';
import WordHuntBoard from "./games/WordHuntBoard";

function GameCreate() {
const [value, setValue] =useState(3)

    const param = useParams()
    const id = param.gameCreate
    // console.log(param.gameCreate);

    if (id === "createdraganddrop" || id === "createfillintheblank" || id === "createquiz") {
        return (
            <div className=" px-3 pb-3 pr-3">
                <header className='text-xl font-semibold my-3'>New Game</header>

                <div className='flex p-3 flex-col rounded-xl border border-main-dark'>
                    <div className='flex mb-2 justify-between pr-2 items-center text-white'>
                        <p className='font-bold text-[20px] text-black'>Quiz</p>
                        <p className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>Publish</p>
                    </div>
                    <label htmlFor="name" className='font-medium text-base text-black'>Heading
                        <input type="text" autoComplete='off' placeholder='Text to Video Converter' className='text-[#545454]  2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input  mt-2 rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>
                    <label htmlFor="name" className='font-medium text-base text-black'>Description
                        <textarea
                            style={{ resize: "none" }} rows={6} type="text" autoComplete='off' placeholder='Looking for an easy and quick way to convert text to video online? You are in the right place! Wave.video’s AI-powered solution allows turning blog posts, articles, and text files into engaging customizable videos quickly and easily. Create videos from text in a matter of a few clicks!' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>
                    <p className='mb-1'>Minimum correct answers to complete game
                        <Select
                            className='border-none bg-input outline-none'
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                            value={value}

                            onChange={(val) => setValue(val)}
                        >
                            {
                                [1, 2, 3, 4, 5, 6].map((item, index) => (
                                    <Option key={index} value={item}>{item}</Option>
                                ))
                            }

                        </Select>
                    </p>
                    <div>
                        {quizData.map((quiz, quizIndex) => (
                            <div key={quizIndex}>
                                <p className="font-semibold">{quiz.title}</p>
                                <div className="p-2 text-[#545454]">
                                    <p className="border-b border-main-light">{quiz.ques}</p>
                                    <div>
                                        {[1, 2, 3, 4].map((option, optionIndex) => (
                                            <p key={optionIndex} className="flex border-b border-main-light text-[#545454] justify-between">
                                                {/* Use `quizIndex` to ensure each question has its own group of radio buttons */}
                                                <Radio
                                                    type="radio"
                                                    label={`${quiz.option} ${option}:`}
                                                    name={`question-${quizIndex}`}
                                                // className="h-8 w-8 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                                                />{" "}
                                                {/* {quiz.option} {option}: */}
                                                <MdOutlineFileUpload />

                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        )
    } else if (id === "createwordhunt") {
        return (
            <div className="pb-3 px-3 pr-3">
                <header className='text-xl font-semibold my-3'>New Game</header>

                <div className='flex p-3 flex-col rounded-xl border border-main-dark'>
                    <div className='flex mb-2 justify-between pr-2 items-center text-white'>
                        <p className='font-bold text-[20px] text-black'>Word Hunting</p>
                        <p className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>Publish</p>
                    </div>
                    <label htmlFor="name" className='font-medium text-base text-black'>Heading
                        <input type="text" autoComplete='off' placeholder='Text to Video Converter' className='text-[#545454]  2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input  mt-2 rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>
                    <label htmlFor="name" className='font-medium text-base text-black'>Descrição
                        <textarea
                            style={{ resize: "none" }} rows={6} type="text" autoComplete='off' placeholder='Looking for an easy and quick way to convert text to video online? You are in the right place! Wave.video’s AI-powered solution allows turning blog posts, articles, and text files into engaging customizable videos quickly and easily. Create videos from text in a matter of a few clicks!' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-xs text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>

                    <div className="flex mt-3 flex-col gap-6">
                        {
                            ["01", "02", "03"].map((hunt, id) => (
                                <div key={id}>
                                    <p className="font-semibold">Level {hunt}</p>
                                    <div className="p-3 mt-1">
                                        <p className="text-[#545454] text-sm">Word :</p>
                                        <div className="flex justify-center items-center">
                                        <WordHuntBoard />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="pb-3 px-3 pr-3">
                <header className='text-xl font-semibold my-3'>New Game</header>

                <div className='flex p-3 flex-col rounded-xl border border-main-dark'>
                    <div className='flex mb-2 justify-between pr-2 items-center text-white'>
                        <p className='font-bold text-[20px] text-black'>Match the coloum</p>
                        <p className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>Publish</p>
                    </div>
                    <label htmlFor="name" className='font-medium text-base text-black'>Heading
                        <input type="text" autoComplete='off' placeholder='Text to Video Converter' className='text-[#545454]  2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-xs text-xs 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input  mt-2 rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>
                    <label htmlFor="name" className='font-medium text-base text-black'>Description
                        <textarea
                            style={{ resize: "none" }} rows={6} type="text" autoComplete='off' placeholder='Looking for an easy and quick way to convert text to video online? You are in the right place! Wave.video’s AI-powered solution allows turning blog posts, articles, and text files into engaging customizable videos quickly and easily. Create videos from text in a matter of a few clicks!' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-xs text-xs 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>

                    <div>
                        {columnData.map((quiz, quizIndex) => (
                            <div key={quizIndex}>
                                <p className="font-semibold">{quiz.title}</p>
                                <div className="p-2 text-[#545454]">
                                    <div>
                                        {[1, 2, 3, 4, 5].map((option, optionIndex) => (
                                            <p key={optionIndex} className="flex border-b border-main-light text-[#545454] justify-between mb-3">
                                                {/* Use `quizIndex` to ensure each question has its own group of radio buttons */}

                                                {quiz.option} {option}:
                                                <MdOutlineFileUpload />

                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        )
    }


}

export default GameCreate