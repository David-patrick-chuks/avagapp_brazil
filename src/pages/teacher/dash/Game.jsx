import React from 'react'
import { Link } from 'react-router-dom'

function Game() {



  return (
    <div className='px-3'>
      <p className='font-bold text-[23px] mb-3 text-black'>Todos os jogos</p>
        
      <div className='grid  grid-cols-2 lg:grid-cols-4 gap-2 p-3 '>
                {
                    ["Quiz","fillInTheBlank","dragAndDrop", "matchTheColoum", "WordHunt"].map((item, index) => (
                        <Link to={`${item}`} key={index} className=' p-3 relative mb-4 flex flex-col gap-1 rounded-xl'>
                            <img src={`/teacher/${item}.png`} alt="" />
                          
                        </Link>
                    ))
                }
            </div>
    </div>
  )
}

export default Game