import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { activtyData } from '../../../../helper/data'

function Activity() {
  return (
    <div className='pr-5 px-3  pt-3'>
      <p className='font-bold text-[22px] text-black'>Detalhes da Atividade</p>
      <div className='flex justify-between items-center text-white'>
        <p className='font-bold text-sm  text-black/50'>Vídeos que Você Assistiu
        </p>
        <p className='flex cursor-pointer p-[10px] items-center rounded-2xl text-sm gap-2 bg-main-dark'>Ver tudo</p>
      </div>
      <div className='grid mt-3   grid-cols-2 lg:grid-cols-4 gap-5'>
        {
          activtyData.map((data, id) => (
            <div key={id} className='flex flex-col items-start gap-1'>
              <img src={data.img} alt={data.desp} />
              <p className='font-semibold text-black text-base'>{data.title}</p>
              <p className=' text-black/50 text-sm'>{data.desp}</p>
            </div>
          ))
        }
      </div>
      <div className='flex mt-5 justify-between items-center text-white'>
        <p className='font-bold text-[22px]  text-black'>Jogos que Você Jogou</p>
        <p className='flex cursor-pointer p-[10px] items-center rounded-2xl text-sm gap-2 bg-main-dark'>Ver tudo</p>
      </div>
      <div className='grid mt-3  grid-cols-2 lg:grid-cols-4 gap-5'>
        {
          [1, 2, 3, 4].map((data, id) => (
            <div key={id} className='flex flex-col items-start gap-1'>
              <img src={"/teacher/Quiz.png"} alt={data} />
            </div>
          ))
        }
      </div>
      <div className='flex mt-5 justify-between items-center text-white'>
        <p className='font-bold text-[22px]  text-black'>Trilha do Conhecimento</p>
        <p className='flex cursor-pointer p-[10px] items-center rounded-2xl text-sm gap-2 bg-main-dark'>Ver tudo</p>
      </div>
      <div className='grid mt-5  grid-cols-2 lg:grid-cols-4 gap-5'>
        {
          [5, 5, 5, 5].map((data, id) => (
            <div key={id} className=' p-3 relative mb-4 flex flex-col gap-1 rounded-xl'>
              <img src="/teacher/react.png" className="rounded-full size-14 bg-main-light p-2 absolute -right-2 -top-2 " />
              <img src={`/teacher/course${data}.png`} alt="" />
              <p className='flex justify-between items-end text-lg font-semibold'>
                <span>Física</span>
                <BsThreeDotsVertical size={15} className=' rotate-90' />
              </p>
              <span className='-mt-1 text-sm text-black/50 '>Atribuído por Sir Haseeb</span>
            </div>

          ))
        }
      </div>
    </div>
  )
}

export default Activity