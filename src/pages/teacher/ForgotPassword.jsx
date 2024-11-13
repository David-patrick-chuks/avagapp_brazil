import { Link } from "react-router-dom";

export default function Forgotpassword() {

  return (
    <div className='flex overflow-hidden bg-white h-screen w-full'>
      <div className=' h-full w-[25.5%] lg:block hidden relative'>
        <img src="/teacher/avagwhite.png" className='absolute w-28 left-7 bottom-0' /> 
        <img src="/teacher/forgotpassword.png" className='h-screen flex' />
      </div>
      <div className='flex w-full lg:w-[74.5%] 2xl:gap-[30px] lg:gap-[25px]  flex-col justify-center items-center h-full'>
        <div className='flex mb-5 lg:mb-0 w-full items-center justify-center'>
          <h1 className='text-main-dark text-3xl font-semibold 2xl:text-5xl'>Esqueceu sua senha?</h1>

        </div>
        <div className='2xl:p-[30px] w-[85%] lg:w-[50%] p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light'>


          <label htmlFor="name" className='font-medium text-lg text-main-dark'>Email
            <input type="email" autoComplete='off' placeholder='Email' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
          </label>


          <Link to={"/teacher/verify-otp"}  className='bg-main-dark w-[100%] cursor-pointer rounded-xl text-center text-white font-bold text-xl mt-2 2xl:text-2xl py-3'>
          Solicitiar OTP
          </Link>
        </div>

      </div>
    </div>
  )
}
