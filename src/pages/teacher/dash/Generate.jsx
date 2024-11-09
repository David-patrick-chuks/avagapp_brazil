import { Avatar, Button, Card, CardFooter, IconButton, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import React, { useState } from 'react';
import { BsFillTrashFill, BsThreeDotsVertical } from 'react-icons/bs';

import {
    Dialog
} from "@material-tailwind/react";
import { RiAiGenerate } from "react-icons/ri";
import { TABLE_HEAD4, TABLE_ROWS } from "../../../../helper/data";
function Generate() {

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
            <div className='flex justify-between p-2 items-center text-white'>
                <p className='font-bold lg:text-[28px] w-full  text-black'>Certificate Generation</p>

                <p onClick={handleOpen} className='flex text-sm justify-center w-full lg:w-[15%] cursor-pointer p-2 lg:p-[10px] items-center rounded-2xl gap-2 bg-main-dark'><RiAiGenerate /> Generate all</p>
            </div>

            <Dialog
                open={open}
                handler={handleOpen}
                size="xs"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="border-2 border-main-dark"
            >
                <div className='2xl:p-[30px]  justify-center items-center font-num w-[100%]  p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light'>
                    <img src="/teacher/pdf.png" className="w-[50%]" />

                    <div className="w-full flex flex-col items-center jusc'">
                        <p className="text-main-dark font-semibold text-2xl">Congratulations</p>
                        <p>Congratulation Your Certification Generate Successfully</p>
                    </div>

                    <p className='bg-main-dark w-[100%] rounded-xl text-center text-white font-bold text-xl mt-2 2xl:text-2xl py-3 cursor-pointer' onClick={handleOpen}>
                    Export as PDF
                    </p>
                </div>

            </Dialog>


            <Card className="h-full lg:overflow-hidden overflow-x-scroll   w-full  px-6">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD4.map((head) => (
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
                        {TABLE_ROWS.map(({ value, Turma, name, pun, img, medal, desemp }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "py-4  p-3 " : "py-4 p-3 border-b  border-gray-300 ";

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
                                            {medal}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {pun}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {desemp}
                                        </Typography>
                                    </td>

                                    <td style={{ position: "relative" }} className={classes}>

                                        <IconButton onClick={() => toogleEdit(index)} variant="text">
                                            <BsThreeDotsVertical className=" rotate-90 h-4 w-4" />
                                        </IconButton>
                                        <Card onClick={() => toogleEdit(index)} className={` ${identifier === index ? "block" : "hidden"} top-0 -right-5 absolute w-[135px]`}>
                                            <List className="w-[120px] text-xs "> <ListItem className="text-xs w-[120px]  ">
                                                <ListItemPrefix >
                                                    <RiAiGenerate />
                                                </ListItemPrefix>
                                                Generate

                                            </ListItem >

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

export default Generate