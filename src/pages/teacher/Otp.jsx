import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function Otp() {
  // Create state for 4 OTP boxes
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  // Function to handle input change
  const handleChange = (value, index) => {
    if (isNaN(value)) return; // Prevent non-numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input box if value is entered
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Function to handle backspace (for deleting and moving back)
  const handleBackspace = (value, index) => {
    if (!value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (

    <div className='flex overflow-hidden bg-white h-screen w-full'>
      <div className=' h-full w-[25.5%] lg:block hidden relative'>
        <img src="/teacher/avagwhite.png" className='absolute w-28 left-7 bottom-0' /> 
        <img src="/teacher/otp.png" className='h-screen flex' />
      </div>
      <div className='flex w-full lg:w-[74.5%] 2xl:gap-[30px] lg:gap-[25px]  flex-col justify-center items-center h-full'>
        <div className='flex mb-5 lg:mb-0 w-full items-center justify-center'>
          <h1 className='text-main-dark text-3xl font-semibold 2xl:text-5xl'>Verifique seu E-mail</h1>

        </div>
        <div className='2xl:p-[30px] w-[85%] lg:w-[50%] p-4 lg:p-5 flex flex-col gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light'>


          <div className='flex justify-evenly'>
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={value}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => e.key === "Backspace" && handleBackspace(e.target.value, index)}
                ref={(el) => (inputRefs.current[index] = el)} // Assign refs
                // style={{
                //   width: '50px',
                //   height: '50px',
                //   textAlign: 'center',
                //   fontSize: '24px',
                //   border: '1px solid #ccc',
                //   borderRadius: '5px',
                // }}
                className='text-main-dark/70 text-center  mt-[7px] text-3xl  lg:text-4xl lg:w-20 size-14 lg:h-20 border border-main-dark active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl ' 
              />
            ))}
          </div>

          <p className='w-full cursor-pointer text-start'>
          Não recebeu um código? <Link to={"/teacher"}  className='text-main-dark'>Reenviar</Link>
        </p>


          <Link  to={"/teacher/reset-password"}     className='bg-main-dark w-[100%] cursor-pointer rounded-xl text-center text-white font-bold text-xl mt-2 2xl:text-2xl py-3'>
          Redefinir Senha
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Otp;
