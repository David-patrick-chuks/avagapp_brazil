import { Avatar, Button, Card, CardFooter, Typography } from "@material-tailwind/react";
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { TABLE_HEAD3, TABLE_ROWS } from "../../../../helper/data";
function Institute() {




    return (
        <div className='flex pt-5 px-3 flex-col gap-2'>
            <div className='flex justify-between p-2 items-center text-white'>
                <p className='font-bold lg:text-[24px] text-black'>Institutor List</p>
                <div className="flex text-accent items-center justify-center lg:w-[25%] gap-4">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search"
            className="text-accent 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-accent border-none active:border-none outline-none rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4 text-black"
            id="name"
          />
          <FiSearch size={16} className="text-black/30" />
          <BsThreeDotsVertical size={16} className="text-black/30" />
        </div>
  
            </div>
       

            <Card className="h-full lg:overflow-hidden overflow-x-scroll  w-full  px-6">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD3.map((head) => (
                                <th key={head} className="border-b p-2 border-gray-300 pb-4 pt-10">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-semibold leading-none"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ value, acao, name, disc, img, email, exp }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "py-4 p-3" : "py-4 p-3 border-b border-gray-300";

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
                                            {disc}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {exp}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {acao}
                                        </Typography>
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

export default Institute