import { Checkbox, Switch } from '@material-tailwind/react'
import React, { useState } from 'react'
import { BiHome } from 'react-icons/bi'
import { FaHome } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

function TSetting() {

  const [rate, setRate] = useState("")
  const [recom, setRecom] = useState("")
  const [form, setForm] = useState(false)

  return (
    <div className='flex overflow-x-hidden bg-main-light cursor-pointer flex-col py-3  px-2 gap-4'>

      <Link to={"/student/dashboard/student-profile"} className='flex  flex-col p-2 '>
        <header className='flex font-semibold text-lg'>User Profile Settings </header>
        <ul>
          <li>   - Child's Profile          </li>
          <li>   - Avatar Selection          </li>
        </ul>
      </Link>


      <div className='flex  flex-col p-2 '>
        <header className='flex font-semibold text-lg'>Notifications & Alerts      </header>
        <ul>
          <li className='flex justify-between'>  - Activity Alerts          <Switch color='blue' defaultChecked /></li>
          <li className='flex justify-between'>   - Reminder Settings           <Switch color='blue' /></li>
        </ul>
      </div>
      <div className='flex  flex-col p-2 '>
        <header className='flex font-semibold text-lg'>Sound & Music Controls
        </header>
        <ul>
          <li className='flex justify-between'>  - Voice Narration
            <Switch color='blue' /></li>

        </ul>
      </div>
      <div className='flex  flex-col p-2 '>
        <header className='flex font-semibold text-lg'>Support & Feedback


        </header>
        <ul className='flex flex-col gap-3'>
          <a href="mailto:abolajiayobami2000@gmail.com"> <li className='flex cursor-pointer items-center gap-1 '>  - Contact Support
            <MdEmail className=' text-main-dark/50 text-lg' /></li>
          </a>
          <li onClick={() => setForm(prev => !prev)} className='font-semibold mt2 cursor-pointer rounded-sm bg-main-dark w-fit text-white py-1 px-2'>
            - Feedback Form
          </li>
          <div className={`${form ? "bg-opacity-100 transition-opacity duration-500" : "hidden"} w-full p-4 lg:p-5 flex flex-col  gap-[18px] rounded-xl 2xl:rounded-3xl  bg-main-light`}>

            <label htmlFor="name" className='font-medium 2xl:text-lg text-main-dark'>
              How would you rate your overall learning experience on our website?
            </label>
            <div className='grid grid-cols-2'>
              {["Excellent", "Good", "Fair", "Poor"].map((rat, id) => (
                <div className='flex justify-start items-center'  onClick={() => setRate(rat)} key={id}>    <Checkbox
                  checked={rate === rat}
                  color='blue'
                  className=" size-5 lg:size-8 rounded-full  border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                /> {rat}</div>
              ))}
            </div>

            <label htmlFor="name" className='font-medium 2xl:text-lg text-main-dark'>
              What feature or lesson did you find most helpful for your learning?
              <input type="text" autoComplete='off' placeholder='(Please describe any challenges you faced)' className='text-main-dark/70 lg:mt-[10px] mt-[7px] 2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-main-dark/70 border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />

            </label>
            <label htmlFor="name" className='font-medium 2xl:text-lg text-main-dark'>
              How likely are you to recommend this website to other students?
            </label>
            <div className='grid grid-cols-2'>

              {["Very Likely", "Likely", "Neutral", "Unlikely"].map((rat, id) => (
                <div className='flex justify-start items-center' onClick={() => setRecom(rat)} key={id}>    <Checkbox
                  checked={recom === rat}
                  color='blue'
                  className=" size-5 lg:size-8 rounded-full  border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                /> {rat}</div>
              ))}
            </div>
            <label htmlFor="name" className='font-medium text-base text-black'>What improvements would you like to see in our lessons or features?

              <textarea
                style={{ resize: "none" }} rows={5} type="text" autoComplete='off' placeholder='(Please share your suggestion)' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4 ' id='name' />
            </label>
            <p className='font-bold mb-2 rounded-lg text-center p-2 text-base lg:text-[22px] bg-main-dark text-white' onClick={() => setForm(prev => !prev)} >Submit Feedback</p>

          </div>

        </ul>
      </div>

      <p className='p-2 bg-white text-main-dark rounded-full lg:hidden absolute bottom-4 left-4 size-12 shadow-md flex justify-center items-center'>

        <FaHome className='size-full' />
      </p>
    </div>
  )
}

export default TSetting