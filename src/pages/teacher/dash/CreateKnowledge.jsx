import React from 'react'
import { MdOutlineFileUpload } from 'react-icons/md'

function CreateKnowledge() {
  return (
    <div className='p-2 pr-10'>
      <p className='font-bold mb-2 text-[22px] text-black'>Create New</p>


      <div className='flex flex-col gap-2'>

        <label htmlFor="name" className='font-medium text-base text-black'>Heading
          <input type="text" autoComplete='off' placeholder='Text to Video Converter' className='text-[#545454]  2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input  mt-2 rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
        </label>
        <label htmlFor="name" className='font-medium text-base text-black'>Description
          <textarea
            style={{ resize: "none" }} rows={6} type="text" autoComplete='off' placeholder='Looking for an easy and quick way to convert text to video online? You are in the right place! Wave.video’s AI-powered solution allows turning blog posts, articles, and text files into engaging customizable videos quickly and easily. Create videos from text in a matter of a few clicks!' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
        </label>

        <div>
          <header>Upload Image / Video</header>

          <div className='flex flex-col rounded-xl justify-center items-center text-main-dark gap-4 w-full bg-input py-10 mt-2'>
            <MdOutlineFileUpload size={50} />
            <p className='flex cursor-pointer p-[8px] items-center rounded-2xl bg-main-dark text-white w-fit'>Upload Image / Video</p>
          </div>
        </div>
        <label htmlFor="name" className='font-medium text-base text-black'>Notes
          <textarea
            style={{ resize: "none" }} rows={10} type="text" autoComplete='off' placeholder='Looking for an easy and quick way to convert text to video online? You are in the right place! Wave.video’s AI-powered solution allows turning blog posts, articles, and text files into engaging customizable videos quickly and easily. Create videos from text in a matter of a few clicks!' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4 mb-5' id='name' />
        </label>
      </div>

    </div>
  )
}

export default CreateKnowledge