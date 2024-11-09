import React from 'react'
import { Link, useParams } from 'react-router-dom'

function GameDetails() {
  const param = useParams()
  // console.log(param);

  return (
    <div>
      <div className='flex justify-between p-2 items-center text-white'>
        <p className='font-bold text-[20px] text-black'>Top Ranking Games</p>
        <Link to={`create${param.gameType.toLocaleLowerCase()}`} className='flex cursor-pointer p-[10px] items-center rounded-2xl gap-2 bg-main-dark'>Create New</Link>
      </div>
      <div className='grid  grid-cols-2 lg:grid-cols-4 gap-2 p-3 '>
        {
          [1, 2, 3, 4,].map((item, index) => (
            <div key={index} className=' p-3 relative mb-4 flex flex-col gap-1 rounded-xl'>
              <img src={`/teacher/${param.gameType}.png`} alt="" />
            </div>
          ))
        }
        <p className='font-bold text-[20px] text-black'> All Games</p>
      </div>
      <div className='grid  grid-cols-2 lg:grid-cols-4 gap-2 p-3 '>
        {
          [1, 2, 3, 4,5, 6, 7,].map((item, index) => (
            <div key={index} className=' p-3 relative mb-4 flex flex-col gap-1 rounded-xl'>
              <img src={`/teacher/${param.gameType}.png`} alt="" />
            </div>
          ))
        }
        {/* <p className='font-bold text-[20px] text-black'>Jogos de alta classificação</p> */}
      </div>
    </div>

  )
}

export default GameDetails