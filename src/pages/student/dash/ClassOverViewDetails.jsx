import { Dialog, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { subtitle } from '../../../../helper/data';
import { useLocation } from 'react-router-dom';

function ClassOverViewDetails() {
    const [activeTab, setActiveTab] = useState("Transcription")


    const location = useLocation()

    const pathSegments = location.pathname.split('/');
    const check = location.pathname.includes("/teacher/dashboard")
    // console.log("Checking if route matches teacher route", check);
    const [open, setOpen] = useState(false);
    const [generate, setGenerate] = useState(false);

    const handleOpen = () => {

        setOpen(!open)
    }

    useEffect(() => {
        const interval = setTimeout(() => {
            setOpen(!open)
        }, 3000)

        return () => {
            clearTimeout(interval)
        }
    }, [])

    const data = [
        {
            label: "Transcription",
            value: "Transcription",
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Notes",
            value: "Notes",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Downloads",
            value: "downloads",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "PDFs",
            value: "pDFs",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },

    ];
    return (
        <div className='p-3 flex gap-3 flex-col pt-5 pr-10'>

{
    generate && (    <Dialog
        open={generate}
        handler={ ()=>setGenerate(prev => !prev)}
        size="xs"
        animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
        }}
        className="border-2 border-main-dark"
    >
        <div className='2xl:p-[30px]  justify-center items-center font-num w-[100%]  p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light'>
            <img src="/teacher/pdf.png" className="w-[50%]" />

            <div className="w-full flex flex-col items-center justify-center'">
                <p className="text-main-dark font-semibold text-2xl">Congratulations</p>
                <p className="text-center">Congratulation Your Certification Generate Successfully</p>
            </div>

            <p className='bg-main-dark w-[100%] rounded-xl text-center text-white font-bold text-xl mt-2 2xl:text-2xl py-3 cursor-pointer' onClick={handleOpen}>
                Export as PDF
            </p>
        </div>

    </Dialog>
)
}

{
    check ? (null) : (
        <Dialog
            open={open}
            handler={ ()=>setGenerate(prev => !prev)}
            size="xs"
            animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0.9, y: -100 },
            }}
            className="border-2 border-main-dark"
        >
            <div className='2xl:p-[30px]  justify-center items-center font-num w-[100%]  p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light'>
                <img src="/student/congrat.png" className="w-[50%]" />

                <div className="w-full flex text-center flex-col items-center jusc'">
                    <p className="text-main-dark font-semibold text-2xl">Congratulations</p>
                    <p className='text-center text-lg font-medium'>You've Successfully Completed                       </p>
                    <p className='text-center text-sm'>Click the button below to generate and download your course completion certificate
                    </p>
                </div>

                <p className='bg-main-dark w-[100%] rounded-xl text-center text-white font-bold text-xl mt-2 2xl:text-2xl py-3 cursor-pointer' onClick={ ()=>setGenerate(prev => !prev)}>
                Generate Certificate
                </p>
            </div>

        </Dialog>)
}
            <p className='font-bold text-[22px] text-black'>Knowledge Trail</p>
            <div>
                <img src="/student/class.png" alt="" />
            </div>
            <p className='font-bold text-[22px] text-black'>Lesson no 01 : What is UX?</p>

            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none border-b w-[35%] border-blue-gray-50 bg-transparent p-0"
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
                            className={activeTab === value ? "text-main-dark " : ""}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody className='border-t border-black/20'>
                    {data.map(({ value }) => (
                        <TabPanel key={value} value={value}>
                            {
                                value === "Transcription" ? (<div className='flex gap-5 flex-col'  >
                                    {
                                        subtitle.map((data, i) => (
                                            <div key={i} className='flex gap-6'>
                                                <p className='flex w-[30%]'>{data.time}</p>
                                                <p className='text-start text-sm'>{data.transcript}</p>
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

        </div>
    )
}

export default ClassOverViewDetails