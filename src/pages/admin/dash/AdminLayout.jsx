import React from 'react'
import { Outlet } from 'react-router-dom'
import ASideBar from './ASideBar'
import { TNavBar } from '../../teacher/dash/TNavBar'

function AdminLayout() {
    return (
        <div className="flex  w-full h-screen">
            <ASideBar />
            <main className="overflow-y-auto w-full bg-white">
                <TNavBar />
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout