import { Card, List, ListItem, ListItemPrefix } from '@material-tailwind/react'
import React, { useState } from 'react'
import { BsFillTrashFill, BsThreeDotsVertical } from 'react-icons/bs'
import { GoPencil } from 'react-icons/go'
import { IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import CreateKnowledge from './CreateKnowledge'

function Knowledge() {

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
    const [courseData, setCourseData] = useState([1, 2, 3, 4, 5, 6])
    const [courseDataB, setCourseDataB] = useState([1, 4, 3,])


    const handleDelete = async (id, data, updater) => {

        const NewData = await data.filter(dat => dat !== id)
        await updater(NewData)
    }

    return (
        <>
            {
                create ? (<CreateKnowledge />) : (
                    <div className='flex overflow-hidden pt-5 flex-col p-3 gap-2'>
                        <div className='flex justify-between p-2 items-center text-white'>
                            <p className='font-bold text-[18px] lg:text-[22px] text-black'>Trilha de Conhecimento</p>
                            <p onClick={CreateKnow} className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>Criar Novo</p>
                        </div>
                        <div className='grid  grid-cols-2 lg:grid-cols-4 gap-2 p-3 '>
                            {
                                courseData.map((item, index) => (
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
                                              <Link className='flex w-full' to={"Know-details"}>
                                              
                                               <ListItemPrefix >
                                                    <IoEyeOutline />
                                                </ListItemPrefix>
                                                Ver
                                              </Link> 

                                            </ListItem >
                                                <ListItem onClick={CreateKnow} className=" w-[120px]   text-xs"> <ListItemPrefix >
                                                    <GoPencil />
                                                </ListItemPrefix>Editar</ListItem>
                                                <ListItem onClick={() => handleDelete(item,courseData, setCourseData )} className=" text-xs w-[120px] font-semibold "> <ListItemPrefix >
                                                    <BsFillTrashFill />
                                                </ListItemPrefix>Excluir</ListItem>
                                            </List>
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='p-2'>
                            <p className='font-bold text-[18px] lg:text-[22px] text-black'>Trilha de Conhecimento Importante</p>

                        </div>
                        <div className='grid  grid-cols-2 lg:grid-cols-4 gap-2 p-3 '>
                            {
                                courseDataB.map((item, index) => (
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
                                                Ver

                                            </ListItem >
                                                <ListItem onClick={CreateKnow} className=" w-[120px]   text-xs"> <ListItemPrefix >
                                                    <GoPencil />
                                                </ListItemPrefix>Editar</ListItem>
                                                <ListItem onClick={() => handleDelete(item,courseDataB, setCourseDataB )} className=" text-xs w-[120px] font-semibold "> <ListItemPrefix >
                                                    <BsFillTrashFill />
                                                </ListItemPrefix>Excluir</ListItem>
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

export default Knowledge