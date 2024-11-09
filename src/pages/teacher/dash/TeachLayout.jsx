import React from 'react'
import { Outlet } from 'react-router-dom'
import TSideBar from './TSideBar'
import { TNavBar } from './TNavBar'

function TeachLayout() {
    return (
        <div className="flex w-full h-screen">
            <TSideBar />
            <main className="overflow-y-auto w-full bg-white">
                <TNavBar />
                <Outlet />
            </main>
        </div>
    )
}

export default TeachLayout