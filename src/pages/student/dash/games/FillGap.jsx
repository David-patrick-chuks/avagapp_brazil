import React from 'react'

function FillGap() {

  const option = [
    {
      label : "Option 1 :  Ranking"
    },  {
      label : "Option 2 :  Ranking"
    },  {
      label : "Option 3 :  Ranking"
    },  {
      label : "Option 4 :  Ranking"
    },
  ]

  return (
    <div className='p-3 flex flex-col gap-2'>

      <div className='  flex gap-5 p-2 items-center lg:justify-start justify-between text-white'>
        <p className='font-bold text-[16px] lg:text-[20px] text-black'>Jogue e Ganhe <img src="/student/bulb.png" className='inline-block my-auto' alt="" /></p>

        <p className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>Total Score: 100</p>
      </div>
      <img src="/student/progress.png" alt="" />

      <div className="flex flex-col gap-5">
        <p className='font-semibold text-2xl'>Question No:1</p>
        <div className='flex flex-col gap-10 p-5'>
          <h2>Which Option Best __________ Clyde's Activity Level?    </h2>

          <div className='flex flex-col gap-2 w-full'>
              {
                option.map((opt, i) => (
                  <p className={`p-2 ${i === 1 ? "bg-main-light" : ""} text-black/50`}  key={i}>{opt.label}</p>
                ))
              }
            </div>

          <div className='flex -mt-5 w-full justify-end'>
            <p className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark text-white'>Next
            </p>

          
          </div>
        </div>
      </div>
    </div>
  )
}

export default FillGap