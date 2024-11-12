import { useState } from 'react';
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { sucessNotify } from '../../../helper/ToastLogin';

import ReCAPTCHA from 'react-google-recaptcha';
export default function AdminLogin() {

    const [captchaValue, setCaptchaValue] = useState(null);

    const siteKey = "6Lf4inwqAAAAAD64ITgkHFsgBPk_qvE52l2_6ltd"

    const [viewPassword, setViewPassword] = useState(false)

    const togglePassword = () => {
        setViewPassword(prev => !prev)

    }
    const navigate = useNavigate()

    const handleCaptchaChange = (value) => {
        console.log('Captcha value:', value);
        setCaptchaValue(value);
    };

    const handleSubmit = () => {
        if (!captchaValue) {
            // alert('Captcha verified, form can be submitted!');
            return alert('Please complete the reCAPTCHA');
        }
        sucessNotify()
        navigate("/admin/dashboard")
    };
    return (
        <div className='flex overflow-hidden bg-white h-screen w-full'>
            <div className=' h-full w-[25.5%] lg:block hidden relative'>
                <img src="/teacher/avagwhite.png" className='absolute w-28 left-7 bottom-0' />
                <img src="/teacher/signin.png" className='h-screen flex' />
            </div>
            <div className='flex w-full lg:w-[74.5%] 2xl:gap-[30px] lg:gap-[25px]  flex-col justify-center items-center h-full'>
                <div className='flex mb-5 lg:mb-0 w-full items-center justify-center'>
                    <h1 className='text-main-dark text-3xl font-semibold 2xl:text-5xl'>Welcome Back</h1>
                    <img src="/teacher/hand.png" className='lg:size-24 size-20 ' />
                </div>
                <div className='2xl:p-[30px] w-[85%] lg:w-[50%] p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light'>

                    <label htmlFor="name" className='font-medium text-lg text-main-dark'>Email
                        <input type="email" autoComplete='off' placeholder='Email' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                    </label>

                    <label htmlFor="name" className=' relative font-medium text-lg text-main-dark'>Password
                        <input type={viewPassword ? "text" : "password"} autoComplete='off' placeholder='Password' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
                        <p className=' top-[60%] right-3 absolute' onClick={togglePassword}>
                            {
                                !viewPassword ? (<BsEyeFill size={20} />
                                ) : (<AiFillEyeInvisible size={20} />)
                            }
                        </p>
                    </label>
                    <ReCAPTCHA
                        sitekey={siteKey}
                        onChange={handleCaptchaChange}
                    />
                    <p onClick={handleSubmit} className='bg-main-dark w-[100%] cursor-pointer rounded-xl text-center text-white font-bold text-xl mt-2 2xl:text-2xl py-3'>
                        Sign In
                    </p>
                </div>

            </div>
        </div>
    )
}
