import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="flex gap-10 flex-col items-center justify-center min-h-screen bg-blue-600">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white  text-center">
      Página Inicial
      </p>
      <div className='grid text-white font-bold grid-cols-2  gap-5'>
        <Link to={"/teacher"} className='border-2 rounded-lg p-3 text-center border-main-light'>PROFESSOR</Link>
        <Link to={"/student"} className='border-2 rounded-lg p-3 text-center border-main-light'>ALUNO</Link>
        <Link to={"/admin"} className='border-2 rounded-lg p-3 col-span-2 text-center border-main-light'>ADMINISTRADOR</Link>
      </div>

    </div>
  )
}

export default HomePage
