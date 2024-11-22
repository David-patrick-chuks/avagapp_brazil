import { Dialog, Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import React, { useState } from 'react'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { BsEyeFill } from 'react-icons/bs'

import Avatar, { Piece } from 'avataaars'
import { FaShirt } from 'react-icons/fa6'
import { IoIosColorPalette } from 'react-icons/io'
import { avatarOptions } from '../../../../helper/avatar'
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
        // {
        //     label: "Face",
        //     value: "Face",
        //     desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias consequuntur dolorem ratione eligendi labore. Quidem quisquam optio numquam sint inventore quis, ipsa`,
        // },
    ]

    const [avatarConfig, setAvatarConfig] = useState({
        topType: 'ShortHairDreads01',
        accessoriesType: 'Round',
        hairColor: 'Black',
        facialHairType: 'Blank',
        facialHairColor: 'BlondeGolden',
        clotheColor: 'Black',
        eyeType: 'Default',
        eyebrowType: 'Default',
        mouthType: 'Smile',
        skinColor: 'Light',
        clotheType: 'Hoodie',
        // graphicType: 'Diamond'
    });


    // Function to update avatar configuration
    const updateAvatar = (type, value) => {
        setAvatarConfig((prev) => ({
            ...prev,
            [type]: value,
        }));
        console.log(`Updated ${type}: ${value}`);
    };



    return (
        <div className='pr-5 px-3 pt-3'>
            <p className='font-bold text-[22px] text-black'>Gerenciamento de Perfil</p>

            <div className='flex justify-between items-start bg-main-light p-5 rounded-xl'>
                <div className='flex lg:flex-row flex-col gap-3 justify-center items-center'>
                    <img src="/student/profile.png" alt="profile image" />
                    <div className='flex flex-col lg:items-start items-center gap-1'>
                        <p className='font-medium text-lg'>Alexa Rawles</p>
                        <p className='text-black/50'>alexarawles@gmail.com</p>
                    </div>
                </div>
                <p onClick={handleOpen} className='flex w-fit cursor-pointer p-[10px] items-center rounded-xl text-sm gap-2 text-white bg-main-dark'>Editar Avatar</p>
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
                    {/* <img src="/student/avatar.png" alt="" /> */}
                    <Avatar
                        style={{ width: '150px', height: '150px', marginBottom: '20px' }}
                        avatarStyle="Circle"
                        {...avatarConfig}
                    />
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
                                    label === "Hair" ? (<img src={`/student/${label}.svg`} alt="" />) : label === "Color" ?
                                        <IoIosColorPalette size={30} color='#545454' /> : label === "Nose" ?
                                            <FaShirt size={30} color='#545454' /> : (<img src={`/student/${label}.png`} alt="" />)
                                }


                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className='border-t bg-main-light border-black/20'>



                        {Object.keys(avatarOptions).map((pieceType) => (

                            pieceType !== "mouthType" ? (null) : (
                                <TabPanel key={pieceType} value={"Face"}>
                                    {/* <Piece style={{ width: '150px', height: '50px', }}    pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red" /> */}
                                    <div>
                                        {/* <h1>mouthType</h1> */}
                                        <div className='grid grid-cols-6 gap-2 place-content-center w-fit'>
                                            {avatarOptions[pieceType].map((option) => (
                                                <div onClick={() => updateAvatar(pieceType, option)} className={` ${avatarConfig.eyeType === option ? "border-2 border-black/30 w-full bg-black/30 rounded-xl " : ""} flex justify-center items-center z-50`} key={option} >

                                                   <Piece style={{ width: '150px', height: '50px', }}    pieceType="eyes" pieceSize="100" mouthType={option} />
                                                </div>))}  </div>

                                        {/* <h1>eyebrow</h1> */}
                                        <div className='grid grid-cols-6 gap-2 place-content-center w-fit'>
                                            {avatarOptions["eyebrowType"].map((option) => (
                                                <div onClick={() => updateAvatar("eyebrowType", option)} className={` ${avatarConfig.eyebrowType === option ? "border-2 border-black/30 w-full bg-black/30 rounded-xl " : ""} flex object-cover z-50`} key={option} >
                                                    <Piece style={{ width: '150px', height: '50px', }}    pieceType="eyebrows" pieceSize="100" eyebrowType={option} />


                                                </div>))}

                                        </div>
                                    </div></TabPanel>)

                        ))}

                        {Object.keys(avatarOptions).map((pieceType) => (

                            pieceType !== "accessoriesType" ? (null) : (
                                <TabPanel key={pieceType} value={"Eye"}>
                                    {/* <Piece style={{ width: '150px', height: '50px', }}    pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red" /> */}
                                    <div>
                                        {/* <h1>accessories</h1> */}
                                        <div className='grid grid-cols-6 gap-2 place-content-center w-fit'>
                                            {avatarOptions[pieceType].map((option) => (
                                                <div onClick={() => updateAvatar(pieceType, option)} className={` ${avatarConfig.accessoriesType === option ? "border-2 border-black/30 w-full bg-black/30 rounded-xl " : ""} flex object-cover z-50`} key={option} >
                                 
                                                    <Piece style={{ width: '150px', height: '50px', }}     pieceType="accessories" pieceSize="80" accessoriesType={option} />
                                                </div>))}  </div>
                                    </div></TabPanel>)

                        ))}
                        {Object.keys(avatarOptions).map((pieceType) => (
                            pieceType !== "clotheType" ? (null) : (
                                <TabPanel key={pieceType} value={"Nose"}>
                                    {/* <Piece style={{ width: '150px', height: '50px', }}    pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red" /> */}
                                    <div>
                                        {/* <h1>Clothe</h1> */}
                                        <div className='grid grid-cols-7 gap-2 place-content-center w-fit'>
                                            {avatarOptions[pieceType].map((option) => (
                                                <div onClick={() => updateAvatar(pieceType, option)} className={` ${avatarConfig.clotheType === option ? "border-2 border-black/30 w-full bg-black/30 rounded-xl " : ""} flex object-cover z-50`} key={option} >
                                                    <Piece style={{ width: '150px', height: '50px', }}    pieceType="clothe" pieceSize="80" clotheType={option} clotheColor={avatarConfig.clotheColor} />

                                                </div>))}  </div>

                                        {/* <h1>Clothe Color</h1> */}
                                        <div className='grid grid-cols-6 gap-2 place-content-center w-fit'>
                                            {avatarOptions["clotheColor"].map((option) => (
                                                <div onClick={() => updateAvatar("clotheColor", option)} className={` ${avatarConfig.clotheColor === option ? "border-2 border-black/30 w-full bg-black/30 rounded-xl " : ""} flex object-cover z-50`} key={option} >
                                                    <Piece style={{ width: '150px', height: '50px', }}    pieceType="clothe" pieceSize="80" clotheType={avatarConfig.clotheType} clotheColor={option} />
                                                </div>))}
                                        </div>
                                    </div></TabPanel>)

                        ))}

                        {Object.keys(avatarOptions).map((pieceType) => (

                            pieceType !== "topType" ? (null) : (
                                <TabPanel key={pieceType} value={"Hair"}>
                                    {/* <Piece style={{ width: '150px', height: '50px', }}    pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red" /> */}
                                    <div>
                                        
                                    {/* <h1>Hair Style</h1> */}
                                        <div className='grid grid-cols-7 gap-2 place-content-center w-fit'>
                                            {avatarOptions[pieceType].map((option) => (
                                                <div onClick={() => updateAvatar(pieceType, option)} className={` ${avatarConfig.topType === option ? "border-2 border-black/30 w-full bg-black/30 rounded-xl " : ""} flex object-cover z-50`} key={option} >
                                                    <Piece style={{ width: '150px', height: '50px', }}    pieceType="top" pieceSize="80" topType={option} hairColor="Brown" />
                                                </div>))}  </div>
                                    </div></TabPanel>)
                        ))}
                        {Object.keys(avatarOptions).map((pieceType) => (

                            pieceType !== "skinColor" ? (null) : (
                                <TabPanel key={pieceType} value={"Color"}>
                                    <div>
                                        <div className='grid grid-cols-6 gap-2 place-content-center w-fit'>
                                            {avatarOptions[pieceType].map((option) => (
                                                <div onClick={() => updateAvatar(pieceType, option)} className={` ${avatarConfig.skinColor === option ? "border-2 border-black/30 w-full bg-black/30 rounded-xl " : ""} flex object-cover z-50`} key={option} >

                                                    <Piece style={{ width: '150px', height: '50px', }}    pieceType="skin" pieceSize="80" skinColor={option} />
                                                </div>))}

                                        </div>
                                        <div className='grid grid-cols-6 gap-2 place-content-center w-fit'>
                                            {avatarOptions["hairColor"].map((option) => (
                                                <div onClick={() => updateAvatar("hairColor", option)} className={` ${avatarConfig.hairColor === option ? "border-2 border-black/30 w-full bg-black/30 rounded-xl " : ""} flex object-cover z-50`} key={option} >

                                                    <Piece style={{ width: '150px', height: '50px', }}    pieceType="top" pieceSize="200" topType={avatarConfig.topType} hairColor={option} />
                                                </div>))}

                                        </div>
                                    </div>  </TabPanel>)

                        ))}
                    </TabsBody>
                </Tabs>
            </Dialog>
            <div className='grid  px-3 lg:grid-cols-2 mt-4 gap-5'>

                <label htmlFor="name" className='font-medium text-sm text-black'>Name
                    <input type="text" autoComplete='off' placeholder='Alexa' className='text-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                </label>

                <label htmlFor="name" className='font-medium text-sm text-black'>Nome
                    <input type="text" autoComplete='off' placeholder='Alexa' className='text-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                </label>

                <label htmlFor="name" className='font-medium text-sm text-black'>E-mail
                    <input type="email" autoComplete='off' placeholder='Alexa' className='text-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                </label>

                <label htmlFor="name" className='font-medium text-sm text-black'>Número (Opcional)
                    <input type="text" autoComplete='off' placeholder='Alexa' className='text-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                </label>



                <label htmlFor="name" className=' relative font-medium text-sm text-black'>Senha
                    <input type={viewPassword ? "text" : "password"} autoComplete='off' placeholder='Alexa' className='text-main-black/50 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-black/50 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    <p className=' top-[60%] right-3 text-black/50 absolute' onClick={togglePassword}>
                        {
                            !viewPassword ? (<BsEyeFill size={18} />
                            ) : (<AiFillEyeInvisible size={18} />)
                        }
                    </p>
                </label>

                <label htmlFor="name" className=' relative font-medium text-sm text-black'>Confirmar Senha
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
                <p className='flex w-fit cursor-pointer p-[10px] items-center rounded-xl text-sm gap-2 text-white bg-main-dark'>Salvar</p>
            </div>        </div>
    )
}

export default StudentProfile