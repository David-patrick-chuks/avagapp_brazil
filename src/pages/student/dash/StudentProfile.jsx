import { Dialog, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import React, { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { BsEyeFill } from 'react-icons/bs'
import { subtitle } from '../../../../helper/data'

function StudentProfile() {


    const [viewPassword, setViewPassword] = useState(false)

    const togglePassword = () => {
        setViewPassword(prev => !prev)

    }
    const [open, setOpen] = useState(false);

    const handleOpen = () => {

        setOpen(!open)
    }
    const [activeTab, setActiveTab] = useState("Hair")


    const data = [
        {
            label: "Hair",
            value: "Hair",
            desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias consequuntur dolorem ratione eligendi labore. Quidem quisquam optio numquam sint inventore quis, ipsa`,
        },
        {
            label: "Color",
            value: "Color",
            desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias consequuntur dolorem ratione eligendi labore. Quidem quisquam optio numquam sint inventore quis, ipsa`,
        },
        {
            label: "Nose",
            value: "Nose",
            desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias consequuntur dolorem ratione eligendi labore. Quidem quisquam optio numquam sint inventore quis, ipsa`,
        },
        {
            label: "Eye",
            value: "Eye",
            desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias consequuntur dolorem ratione eligendi labore. Quidem quisquam optio numquam sint inventore quis, ipsa`,
        },
        {
            label: "Face",
            value: "Face",
            desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias consequuntur dolorem ratione eligendi labore. Quidem quisquam optio numquam sint inventore quis, ipsa`,
        },
    ]

    return (
        <div className='pr-5 px-3 pt-3'>
            <p className='font-bold text-[22px] text-black'>Profile Management</p>

            <div className='flex justify-between items-start bg-main-light p-5 rounded-xl'>
                <div className='flex lg:flex-row flex-col gap-3 justify-center items-center'>
                    <img src="/student/profile.png" alt="profile image" />
                    <div className='flex flex-col lg:items-start items-center gap-1'>
                        <p className='font-medium text-lg'>Alexa Rawles</p>
                        <p className='text-black/50'>alexarawles@gmail.com</p>
                    </div>
                </div>
                <p  onClick={handleOpen}  className='flex w-fit cursor-pointer p-[10px] items-center rounded-xl text-sm gap-2 text-white bg-main-dark'>Edit Avatar</p>
            </div>


            <Dialog
                open={open}
                handler={handleOpen}
                size="xs"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                className="border-2 py-3 border-main-dark"
            >
               
               <div className='flex w-full justify-center items-center'>
                <img src="/student/avatar.png" alt="" />
               </div>

            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none border-b w-[100%] flex h-14 justify-start items-center bg-main-light border-blue-gray-50 p-0"
                    indicatorProps={{
                        className:
                            "bg-transparent border-b-4 border-main-dark  shadow-none rounded-[3px]",
                    }}
                >
                    
                    {data.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            onClick={() => setActiveTab(value)}
                            className={` h-full ${activeTab === value ? "text-main-dark " : ""}`}
                        >
                           {
                            label === "Hair" ? (<img src={`/student/${label}.svg`} alt="" />) : (<img src={`/student/${label}.png`} alt="" />)
                           }
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody className='border-t bg-main-light border-black/20'>
                    {data.map(({ value }) => (
                        <TabPanel key={value} value={value}>
                            {
                                value === "Hair" ? (<div className='grid gap-2 grid-cols-5'  >
                                    {
                                        [1,2,3,4,5,6,3,5,1,2,3,5,6,4,1].map((data, i) => (
                                            <div key={i} className='flex hover:border-2 bg-white rounded-xl  border-black/50 w-full'>
                                                <img src={`/student/hair${data}.png`} />
                                            </div>
                                        ))
                                    }
                                </div>) : (<div>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit velit perspiciatis nesciunt, impedit ipsa atque magni possimus expedita iure ea tempora magnam non ab nemo qui provident assumenda totam? Inventore?
                                </div>)
                            }
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>

            </Dialog>


            <div className='grid  px-3 lg:grid-cols-2 mt-4 gap-5'>

                <label htmlFor="name" className='font-medium text-sm text-black'>Name
                    <input type="text" autoComplete='off' placeholder='Alexa' className='text-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                </label>

                <label htmlFor="name" className='font-medium text-sm text-black'>Name
                    <input type="text" autoComplete='off' placeholder='Alexa' className='text-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                </label>

                <label htmlFor="name" className='font-medium text-sm text-black'>E-mail
                    <input type="email" autoComplete='off' placeholder='Alexa' className='text-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                </label>

                <label htmlFor="name" className='font-medium text-sm text-black'>Number (Optional)
                    <input type="text" autoComplete='off' placeholder='Alexa' className='text-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                </label>



                <label htmlFor="name" className=' relative font-medium text-sm text-black'>Password
                <input type={viewPassword ? "text" : "password"} autoComplete='off' placeholder='Alexa' className='text-main-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    <p className=' top-[60%] right-3 text-black/50 absolute' onClick={togglePassword}>
                        {
                            !viewPassword ? (<BsEyeFill size={18} />
                            ) : (<AiFillEyeInvisible size={18} />)
                        }
                    </p>
                </label>

                <label htmlFor="name" className=' relative font-medium text-sm text-black'>Confirm Password
                    <input type={viewPassword ? "text" : "password"} autoComplete='off' placeholder='Alexa' className='text-main-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    <p className=' top-[60%] right-3 text-black/50 absolute' onClick={togglePassword}>
                        {
                            !viewPassword ? (<BsEyeFill size={18} />
                            ) : (<AiFillEyeInvisible size={18} />)
                        }
                    </p>
                </label>
            </div>

            <div className='flex w-full justify-end mt-5'>
                <p className='flex w-fit cursor-pointer p-[10px] items-center rounded-xl text-sm gap-2 text-white bg-main-dark'>Save</p>
            </div>        </div>
    )
}

export default StudentProfile