import { Avatar, Button, Card, CardFooter, IconButton, Typography } from "@material-tailwind/react";
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { IoMdFunnel } from "react-icons/io";
import { LuArrowDownUp } from "react-icons/lu";
import { TABLE_HEAD5, TABLE_ROWS } from "../../../../helper/data"; import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";


function StudentRanking() {
    const [Data, setData] = useState(TABLE_ROWS)
    const ITEMS_PER_PAGE = 9;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(Data.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentData = Data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    const [selectedRow, setSelectedRow] = useState(null); // Track selected row details
    const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility

    const handleViewDetails = (row) => {
        setSelectedRow(row); // Set the clicked row's data
        setIsModalOpen(true); // Show the modal
    };

    return (
        <div className="pt-2 px-3 overflow-hidden lg:px-0">
            <div>
                {/* Existing Table Code */}
                {isModalOpen && (
                    <Dialog open={isModalOpen}  size="xs" className="w-full bg-main-light text-black"   handler={() => setIsModalOpen(false)} >
                        <DialogHeader  className="flex justify-center flex-col items-center">
                        <Avatar src={selectedRow?.img} alt={selectedRow?.name} size="lg" /></DialogHeader>
                        <DialogBody className="flex  text-black  gap-2 justify-center flex-wrap w-full items-center">
                            <p className=" p-2 border-main-dark border rounded-md font-semibold"><strong>Nome:</strong> {selectedRow?.name}</p>
                            <p className=" p-2 border-main-dark border rounded-md font-semibold"><strong>Email:</strong> {selectedRow?.email}</p>
                            <p className=" p-2 border-main-dark border rounded-md font-semibold"><strong>Medal:</strong> {selectedRow?.medal}</p>
                            <p className=" p-2 border-main-dark border rounded-md font-semibold"><strong>Pun:</strong> {selectedRow?.pun}</p>
                            <p className=" p-2 border-main-dark border rounded-md font-semibold"><strong>Desemp:</strong> {selectedRow?.desemp}</p>
                            <p className=" p-2 border-main-dark border rounded-md font-semibold"><strong>Date:</strong> {selectedRow?.date}</p>
                        </DialogBody>
                        <DialogFooter>
                            <Button variant="text" onClick={() => setIsModalOpen(false)} className="mr-1">
                                Fechar
                            </Button>
                        </DialogFooter>
                    </Dialog>
                )}
            </div>

            <p className='font-bold text-[23px] text-black'>Ranking</p>
            <div className='flex justify-between  px-10  items-center text-black/50'>
                <div className="flex gap-3 text-lg">
                    <IoMdFunnel />
                    <LuArrowDownUp />
                </div>
                <div className="flex text-accent items-center justify-center  lg:w-[20%] gap-4">
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Pesquisar aqui"
                        className="text-accent 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-accent border-none active:border-none outline-none rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4 text-black"
                        id="name"
                    />
                    <FiSearch size={16} className="text-black/30" />
                </div>
            </div>
            <Card className="h-full lg:overflow-hidden overflow-x-scroll  w-full  lg:px-6">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD5.map((head) => (
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
                        {currentData.map(({ value, date, name, pun, img, medal,email, desemp, id }, index) => {
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
                                        <IconButton onClick={() => handleViewDetails({ id, value, date, name, pun, img,email, medal, desemp })} variant="text">
                                            <p className="capitalize">Ver</p>
                                        </IconButton>
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

export default StudentRanking