
import React, { useState } from 'react';
import { IoEyeOutline, IoTriangle } from 'react-icons/io5';
import { studentData, studentNotify } from "../../../../helper/data";
import { Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react';
import { BsFillTrashFill, BsThreeDotsVertical } from 'react-icons/bs';
import { GoPencil } from 'react-icons/go';
export default function SHome() {

    return (
        <div className='pr-4 px-3 lg:px-0 flex flex-col gap-4'>
            <div className='flex items-center'>
                <h1 className="text-center -mb-1 text-2xl font-bold">
                Hello, Faizan Ansari
                </h1>
                <img src="/teacher/avatar.png" className='size-12' />
            </div>

            <div className='grid gap-3 lg:grid-cols-3'>
                <div className='grid col-span-2 gap-3 grid-cols-2'>
                    {
                        studentData.map((card, id) => (
                            <div key={id} className='flex p-3 lg:p-5 gap-4 bg-main-light justify-start items-center rounded-lg'>
                                <div className=' bg-[#A9E8FF] p-2 rounded-full '><img src={card.img} alt={card.label} /></div>
                                <div>
                                    <p className='font-semibold text-xl'>{card.label}</p>
                                    <div className='flex gap-2 items-center'>
                                        <p>{card.value} </p>
                                        <span className={`flex text-xs items-end ${card.label === "Medal" ? "text-[#FF0000]" : "text-main-dark"}`}><IoTriangle size={10} className=' rotate-180   mb-[3px] mr-[2px]' />{card.desp}</span>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className=' grid lg:col-span-1 col-span-2 lg:flex flex-col px-5 gap-3'>
                    <p className='px-8 text-main-dark font-medium flex'>Classification
                        <img src="/student/star.png" alt="" />

                    </p>
                    {
                        studentNotify.map((winner, id) => (
                            <div key={id} className='flex items-center gap-3'>
                                <p className='bg-main-light text-center flex items-center justify-center  size-10 text-xs text-main-dark w-7 font-medium rounded-full h-7 '>
                                    #{winner.value}
                                </p>
                                <div className='bg-main-light py-[3px] items-center relative flex w-full gap-2 px-3 rounded-lg'>
                                    <img src={winner.img} className='size-8' />
                                    <div>
                                        <p className='text-base font-medium'>{winner.name}</p>
                                        <p className='text-xs text-black/50'>{winner.desp}</p>
                                    </div>
                                    <img src="/student/award.png" className='absolute -top-[14px] right-0' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

      <div>
      <div className='flex justify-between p-2 items-center text-white'>
                <p className='font-bold text-[22px] text-black'>Knowledge Trail</p>
                <p  className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>See all</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 p-3 '>
                {
                    [1, 2, 3, 4].map((item, index) => (
                        <div key={index} className=' p-3 relative mb-4 flex flex-col gap-1 rounded-xl'>
                            <img src="/teacher/react.png" className="rounded-full size-14 bg-main-light p-2 absolute -right-2 -top-2 " />
                            <img src={`/teacher/course${item}.png`} alt="" />
                            <p className='flex justify-between items-end text-lg font-semibold'>
                                <span>Physics</span>
                                <BsThreeDotsVertical size={15} className=' rotate-90' />
                            </p>
                            <span className='-mt-1 text-sm text-black/50 '>Assigned by Sir Haseeb</span>
                         
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-between p-2 items-center text-white'>
                <p className='font-bold text-[22px] text-black'>Class Track</p>
                <p  className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>See all</p>
            </div>
            <div className='grid  grid-cols-2 lg:grid-cols-4 gap-2 p-3 '>
                {
                    [5, 6, 1, 3].map((item, index) => (
                        <div key={index} className=' p-3 relative mb-4 flex flex-col gap-1 rounded-xl'>
                            <img src="/teacher/react.png" className="rounded-full size-14 bg-main-light p-2 absolute -right-2 -top-2 " />
                            <img src={`/teacher/course${item}.png`} alt="" />
                            <p className='flex justify-between items-end text-lg font-semibold'>
                                <span>Physics</span>
                                <BsThreeDotsVertical size={15} className=' rotate-90' />
                            </p>
                            <span className='-mt-1 text-sm text-black/50 '>Assigned by Sir Haseeb</span>
                         
                        </div>
                    ))
                }
            </div>
      </div>

        </div>
    )
}
