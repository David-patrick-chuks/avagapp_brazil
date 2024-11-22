import { Avatar, Button, Card, CardFooter, IconButton, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import React, { useState } from 'react';
import { BsFillTrashFill, BsThreeDotsVertical } from 'react-icons/bs';
import { GoPencil } from "react-icons/go";
import { IoEyeOutline } from 'react-icons/io5';

import {
    Dialog
} from "@material-tailwind/react";
import { TABLE_HEAD2, TABLE_ROWS } from "../../../../helper/data";
function UserMangement() {

    const [Data, setData] = useState(TABLE_ROWS)
    const ITEMS_PER_PAGE = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(Data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentData = Data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  
    
    const deleteData = (id) => {
        const dataf = Data.filter((row, index) => index !== id)
        setData(dataf)
    }
    const [open, setOpen] = useState(false);

    const handleOpen = () => {

        setOpen(!open)
    }

    const [identifier, setIdentifier] = useState(null)


    const toogleEdit = (id) => {
        if (identifier === id) {
            setIdentifier(null)
        } else {
            setIdentifier(id)

        }


    }



    return (
        <div className='flex pt-5 px-3 flex-col gap-4'>
            <div className='flex justify-between p-2 gap-3 items-center text-white'>
                <p className='font-bold lg:text-[28px] text-black'>Gestão de Usuários</p>
                <p onClick={handleOpen} className='flex cursor-pointer p-[6px] lg:p-[10px] text-center items-center rounded-lg lg:rounded-2xl gap-2 bg-main-dark'>Adicionar Novo Usuário</p>
            </div>

            <Dialog
                open={open}
                handler={handleOpen}
                size="xs"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="p-3 border-2 border-main-dark"
            >
                <h1 className="text-2xl font-num font-bold text-main-dark mb-3">Adicionar Novo Usuário</h1>

                <div className='2xl:p-[30px] font-num w-[100%]  p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light'>

                    <label htmlFor="name" className='font-medium text-lg text-main-dark'>Nome
                        <input type="text" autoComplete='off' placeholder='Nome' className='text-main-dark/70 lg:mt-[4px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>
                    <label htmlFor="name" className='font-medium text-lg text-main-dark'>Email
                        <input type="email" autoComplete='off' placeholder='Email' className='text-main-dark/70 lg:mt-[4px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>
                    <label htmlFor="name" className='font-medium text-lg text-main-dark'>Função
                        <input type="text" autoComplete='off' placeholder='Função ' className='text-main-dark/70 lg:mt-[4px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>
                    <label htmlFor="name" className='font-medium text-lg text-main-dark'>Status
                        <input type="text" autoComplete='off' placeholder='Status' className='text-main-dark/70 lg:mt-[4px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>

                    <p className='bg-main-dark w-[100%] rounded-xl text-center text-white font-bold text-xl mt-2 2xl:text-2xl py-3 cursor-pointer' onClick={handleOpen}>
                    Adicionar
                    </p>
                </div>

            </Dialog>


            <Card className="h-full lg:overflow-hidden overflow-x-scroll   w-full  px-6">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD2.map((head) => (
                                <th key={head} className="border-b p-2 border-gray-300 pb-4 pt-10">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-semibold leading-none "
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map(({ value, Turma, name, date, img, email, status }, index) => {
                                       const isLast = index === currentData.length - 1;
                                       const classes = isLast ? "py-4  p-3 " : "py-4 p-3 border-b  border-gray-300 ";
                         
                                       return (
                                         <tr key={index} className="hover:bg-gray-50">
                                           <td className={classes}>
                                             <Typography
                                               variant="small"
                                               className="font-normal text-gray-600"
                                             >
                                               {startIndex + index + 1}
                                             </Typography>
                                           </td>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <Avatar src={img} alt={name} size="sm" />
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {name}
                                                </Typography>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {email}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {date}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {status}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {Turma}
                                        </Typography>
                                    </td>
                                    <td style={{ position: "relative" }} className={classes}>

                                        <IconButton onClick={() => toogleEdit(index)} variant="text">
                                            <BsThreeDotsVertical className=" rotate-90 h-4 w-4" />
                                        </IconButton>
                                        <Card onClick={() => toogleEdit(index)} className={` ${identifier === index ? "block" : "hidden"} ${isLast ? "-top-20" : "top-0"} right-16 absolute w-[135px]`}>
                                            <List className="w-[120px] text-xs "> <ListItem className="text-xs w-[120px]  ">
                                                <ListItemPrefix >
                                                    <IoEyeOutline />
                                                </ListItemPrefix>
                                                Ver

                                            </ListItem >
                                                <ListItem className=" w-[120px]   text-xs"> <ListItemPrefix >
                                                    <GoPencil />
                                                </ListItemPrefix>Editar</ListItem>
                                                <ListItem onClick={ () => deleteData(index)}  className=" text-xs w-[120px] font-semibold "> <ListItemPrefix >
                                                    <BsFillTrashFill />
                                                </ListItemPrefix>Excluir</ListItem>
                                            </List>
                                        </Card>

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </Card>
            <CardFooter className="flex items-center justify-between w-full border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                Página {currentPage} de {totalPages}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant="outlined"
                        size="sm"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Anterior
            </Button>
                    <Button
                        variant="outlined"
                        size="sm"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Próxima
            </Button>
                </div>
            </CardFooter>
        </div>
    )
}

export default UserMangement