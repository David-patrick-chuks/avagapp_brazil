import { Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import React, { useState } from 'react'
import { BsFillTrashFill, BsThreeDotsVertical } from 'react-icons/bs'
import { GoPencil } from 'react-icons/go'
import { IoEyeOutline } from 'react-icons/io5'
import CreateKnowledge from '../../teacher/dash/CreateKnowledge'

function AdminKnowledge() {

    const [identifier, setIdentifier] = useState(null)
    const [create, setCreate] = useState(false)

    const CreateKnow = () => {
        setCreate(prev => !prev)
    }
    const toogleEdit = (id) => {
        if (identifier === id) {
            setIdentifier(null)
        } else {
            setIdentifier(id)

        }


    }



    return (
       <>
       {
        create ? (<CreateKnowledge />) : (
            <div className='flex overflow-hidden pt-5 flex-col p-3 gap-2'>
            <div className='flex justify-between p-2 items-center text-white'>
                <p className='font-bold text-[22px] text-black'>Knowledge Trail</p>
                <p onClick={CreateKnow} className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>Create New</p>
            </div>
            <div className='grid  grid-cols-2 lg:grid-cols-4 gap-2 p-3 '>
                {
                    [1, 2, 3, 4, 5, 6].map((item, index) => (
                        <div key={index} className=' p-3 relative mb-4 flex flex-col gap-1 rounded-xl'>
                            <img src="/teacher/react.png" className="rounded-full size-14 bg-main-light p-2 absolute -right-2 -top-2 " />
                            <img src={`/teacher/course${item}.png`} alt="" />
                            <p className='flex justify-between items-end text-lg font-semibold'>
                                <span>Física</span>
                                <BsThreeDotsVertical onClick={() => toogleEdit(index)} size={15} className=' rotate-90' />
                            </p>
                            <span className='-mt-1 text-sm text-black/50 '>Atribuído por Sir Haseeb</span>
                            <Card onClick={() => toogleEdit(index)} className={` ${identifier === index ? "block" : "hidden"} right-10 -bottom-20 z-50 absolute w-[135px]`}>
                                <List className="w-[120px] text-xs "> <ListItem className="text-xs w-[120px]  ">
                                    <ListItemPrefix >
                                        <IoEyeOutline />
                                    </ListItemPrefix>
                                    View

                                </ListItem >
                                    <ListItem className=" w-[120px]   text-xs"> <ListItemPrefix >
                                        <GoPencil />
                                    </ListItemPrefix>Edit</ListItem>
                                    <ListItem className=" text-xs w-[120px] font-semibold "> <ListItemPrefix >
                                        <BsFillTrashFill />
                                    </ListItemPrefix>Delete</ListItem>
                                </List>
                            </Card>
                        </div>
                    ))
                }
            </div>
            <div className='p-2'>
                <p className='font-bold text-[22px] text-black'>Important Knowledge Trail</p>

            </div>
            <div className='grid  grid-cols-2 lg:grid-cols-4 gap-2 p-3 '>
                {
                    [1, 4, 3,].map((item, index) => (
                        <div key={index} className=' p-3 relative mb-4 flex flex-col gap-1 rounded-xl'>
                            <img src="/teacher/react.png" className="rounded-full size-14 bg-main-light p-2 absolute -right-2 -top-2 " />
                            <img src={`/teacher/course${item}.png`} alt="" />
                            <p className='flex justify-between items-end text-lg font-semibold'>
                                <span>Física</span>
                                <BsThreeDotsVertical onClick={() => toogleEdit(index + 10)} size={15} className=' rotate-90' />
                            </p>
                            <span className='-mt-1 text-sm text-black/50 '>Atribuído por Sir Haseeb</span>
                            <Card onClick={() => toogleEdit(index + 10)} className={` ${identifier === index + 10 ? "block" : "hidden"} right-10 -bottom-10 z-50 absolute w-[135px]`}>
                                <List className="w-[120px] text-xs "> <ListItem className="text-xs w-[120px]  ">
                                    <ListItemPrefix >
                                        <IoEyeOutline />
                                    </ListItemPrefix>
                                    View

                                </ListItem >
                                    <ListItem className=" w-[120px]   text-xs"> <ListItemPrefix >
                                        <GoPencil />
                                    </ListItemPrefix>Edit</ListItem>
                                    <ListItem className=" text-xs w-[120px] font-semibold "> <ListItemPrefix >
                                        <BsFillTrashFill />
                                    </ListItemPrefix>Delete</ListItem>
                                </List>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
        ) 
       }
       </>
    )
}

export default AdminKnowledge