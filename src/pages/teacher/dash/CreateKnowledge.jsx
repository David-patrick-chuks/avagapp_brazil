import React from 'react'
import { MdOutlineFileUpload } from 'react-icons/md'

function CreateKnowledge() {
  return (
    <div className='p-2 pr-10'>
      <p className='font-bold mb-2 text-[22px] text-black'>Criar Novo</p>


      <div className='flex flex-col gap-2'>

        <label htmlFor="name" className='font-medium text-base text-black'>Cabeçalho
          <input type="text" autoComplete='off' placeholder='Título' className='text-[#545454]  2xl:px-[18px] lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input  mt-2 rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
        </label>
        <label htmlFor="name" className='font-medium text-base text-black'>Descrição
          <textarea
            style={{ resize: "none" }} rows={6} type="text" autoComplete='off' placeholder='Descrição' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4' id='name' />
        </label>

        <div>
          <header>Enviar Imagem/Vídeo</header>

          <div className='flex flex-col rounded-xl justify-center items-center text-main-dark gap-4 w-full bg-input py-10 mt-2'>
            <MdOutlineFileUpload size={50} />
            <p className='flex cursor-pointer p-[8px] items-center rounded-2xl bg-main-dark text-white w-fit'>Enviar Imagem/Vídeo</p>
          </div>
        </div>
        <label htmlFor="name" className='font-medium text-base text-black'>Notas
          <textarea
            style={{ resize: "none" }} rows={10} type="text" autoComplete='off' placeholder='Notas' className='text-[#545454]  2xl:px-[18px] mt-2 lg:px-[10px] px-[7px] 2xl:placeholder:text-base lg:placeholder:text-sm text-sm 2xl:text-base placeholder:text-[#545454] border-none active:border-none outline-none bg-input rounded-lg 2xl:rounded-xl w-full py-3 2xl:py-4 mb-5' id='name' />
        </label>
      </div>

    </div>
  )
}

export default CreateKnowledge