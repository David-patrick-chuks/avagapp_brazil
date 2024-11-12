import { Avatar, Button, Card, CardFooter, IconButton, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { useState } from 'react';
import { BsFillTrashFill, BsThreeDotsVertical } from 'react-icons/bs';

import { FiSearch } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { IoMdFunnel } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { LuArrowDownUp } from "react-icons/lu";
import { TABLE_HEAD5, TABLE_ROWS } from "../../../../helper/data";

function AdminRanking() {


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
  const [identifier, setIdentifier] = useState(null)



  const toogleEdit = (id) => {
    if (identifier === id) {
      setIdentifier(null)
    } else {
      setIdentifier(id)

    }


  }

  return (
    <div className="pt-2 px-3">

      <p className='font-bold text-[23px] text-black'>Leaderboard</p>


      <div className='flex justify-between  px-10  items-center text-black/50'>

        <div className="flex gap-3 text-lg">
          <IoMdFunnel />
          <LuArrowDownUp />
        </div>

        <div className="flex text-accent items-center justify-center lg:w-[20%] gap-4">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search"
            className="text-accent 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-accent border-none active:border-none outline-none rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4 text-black"
            id="name"
          />
          <FiSearch size={16} className="text-black/30" />
        </div>
      </div>

      <Card className="h-full lg:overflow-hidden overflow-x-scroll   w-full  px-6">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD5.map((head) => (
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
            {currentData.map(({ value, date, name, pun, img, medal, desemp }, index) => {
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
                  <td className={classes}>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td style={{ position: "relative" }} className={classes}>

                    <IconButton onClick={() => toogleEdit(index)} variant="text">
                      <BsThreeDotsVertical className=" rotate-90 h-4 w-4" />
                    </IconButton>
                    <Card onClick={() => toogleEdit(index)} className={` ${identifier === index ? "block" : "hidden"} top-0 right-20 z-50 absolute w-[135px]`}>
                      <List className="w-[120px] text-xs "> <ListItem className="text-xs w-[120px]  ">
                        <ListItemPrefix >
                          <IoEyeOutline />
                        </ListItemPrefix>
                        View

                      </ListItem >
                        <ListItem className=" w-[120px]   text-xs"> <ListItemPrefix >
                          <GoPencil />
                        </ListItemPrefix>Edit</ListItem>
                        <ListItem onClick={ () => deleteData(index)}  className=" text-xs w-[120px] font-semibold "> <ListItemPrefix >
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

export default AdminRanking