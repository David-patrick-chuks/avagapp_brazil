import { Avatar, Button, Card, CardFooter, IconButton, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import React, { useState } from 'react';
import { BsFillTrashFill, BsThreeDotsVertical } from 'react-icons/bs';
import { GoPencil } from "react-icons/go";
import { IoEyeOutline } from 'react-icons/io5';

import { TABLE_HEAD_ADMIN, TABLE_ROWS } from "../../../../helper/data";
function TeacherRegistration() {

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
        <div className='flex pt-5 px-2 flex-col gap-4'>
            <div className='flex justify-between p-2 items-center text-white'>
                <p className='font-bold text-[28px] text-black'>Teachers Management</p>
                {/* <p onClick={handleOpen} className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>Adicionar Novo Usuário</p> */}
            </div>

        
            <Card className="h-full lg:overflow-hidden overflow-x-scroll   w-full  px-6">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD_ADMIN.map((head) => (
                                <th key={head} className="border-b  p-2 border-gray-300 pb-4 pt-10">
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
                        {TABLE_ROWS.map(({ value, disc, name, date, img, email, status }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "py-4  p-3" : "py-4 border-b p-3 border-gray-300 ";

                            return (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {value}
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
                                            {disc}
                                        </Typography>
                                    </td>
                                    <td style={{ position: "relative" }} className={classes}>

                                        <IconButton onClick={() => toogleEdit(index)} variant="text">
                                            <BsThreeDotsVertical className=" rotate-90 h-4 w-4" />
                                        </IconButton>
                                        <Card onClick={() => toogleEdit(index)} className={` ${identifier === index ? "block" : "hidden"} top-0 right-16 absolute w-[135px]`}>
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

                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
       
            </Card>
            <CardFooter className="flex items-center justify-between w-full border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" size="sm">
              Prev
            </Button>
            <Button variant="outlined" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
        </div>
    )
}

export default TeacherRegistration