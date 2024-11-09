import React from 'react'
import { Outlet } from 'react-router-dom'
import SSideBar from './SSideBar'
import { TNavBar } from '../../teacher/dash/TNavBar'

function StudentLayout() {
    return (
        <div className="flex w-full h-screen">
            <SSideBar />
            <main className="overflow-y-auto w-[100%] bg-white">
                <TNavBar />
                <Outlet />
            </main>
        </div>
    )
}

export default StudentLayout