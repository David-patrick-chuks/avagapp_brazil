/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ErrorPage from './ErrorPage'
import HomePage from './HomePage'
import Forgotpassword from './pages/teacher/ForgotPassword'
import Login from './pages/teacher/Login'
import Signup from './pages/teacher/Signup'

import Generate from './pages/teacher/dash/Generate'
import Institute from './pages/teacher/dash/Institute'
import Knowledge from './pages/teacher/dash/Knowledge'
import TeachLayout from './pages/teacher/dash/TeachLayout'
import THome from './pages/teacher/dash/THome'
import TSetting from './pages/teacher/dash/TSetting'
import UserMangement from './pages/teacher/dash/UserMangement'
import UserRegistration from './pages/teacher/dash/UserRegistration'
import Otp from './pages/teacher/Otp'
import ResetPassword from './pages/teacher/ResetPassword'
import Ranking from './pages/teacher/dash/Ranking'
import Game from './pages/teacher/dash/Game'
import GameDetails from './pages/teacher/dash/GameDetails'
import GameCreate from './pages/teacher/dash/GameCreate'
import AdminLogin from './pages/admin/AdminLogin'
import AdminLayout from './pages/admin/dash/AdminLayout'
import AdminHome from './pages/teacher/dash/AdminHome'
import TeacherManagement from './pages/admin/dash/TeacherManagement'
import TeacherRegistration from './pages/admin/dash/TeacherRegistration'
import AdminKnowledge from './pages/admin/dash/AdminKnowledge'
import AdminRanking from './pages/admin/dash/AdminRanking'
import StudentLogin from './pages/student/StudentLogin'
import StudentLayout from './pages/student/dash/StudentLayout'
import SHome from './pages/student/dash/SHome'
import ClassOverView from './pages/student/dash/ClassOverView'
import ClassOverViewDetails from './pages/student/dash/ClassOverViewDetails'
import StudentKnowledge from './pages/student/dash/StudentKnowledge'
import Activity from './pages/student/dash/Activity'
import { Toaster } from 'react-hot-toast'
import StudentProfile from './pages/student/dash/StudentProfile'
import StudentGame from './pages/student/dash/StudentGame'
import StudentGameDetails from './pages/student/dash/StudentGameDetails'
import ClassDetails from './pages/student/dash/ClassDetails'
import StudentRanking from './pages/student/dash/StudentRanking'

function App() {
  return (

    <Router>
      <Toaster />
      <Routes>
/// home page
        <Route path="/" element={<HomePage />} />

/// admin routes ///

        <Route path='/student' >
          <Route index element={<StudentLogin />} />
          <Route path="dashboard" element={<StudentLayout />} >
            <Route index element={<SHome />} />
            <Route path="class-overview" element={<ClassOverView />} />
            <Route path="class-overview/:id" element={<ClassDetails />} />
            <Route path="student-knowledge" element={<StudentKnowledge />} />
            <Route path="student-knowledge/details" element={<ClassOverViewDetails />} />

            <Route path="activty" element={<Activity />} />
            <Route path="student-ranking" element={<StudentRanking />} />
            <Route path="student-profile" element={<StudentProfile />} />

            {/* <Route path="student-game/:gameType/:gameCreate" element={<StudentGame />} /> */}

            <Route path="student-game" element={<Game />} />
            <Route path="student-game/:gameType" element={<StudentGameDetails />} />
            <Route path="setting" element={<TSetting />} />

          </Route>



        </Route>

        <Route path='/admin' >
          <Route index element={<AdminLogin />} />
          <Route path="dashboard" element={<AdminLayout />} >
            <Route index element={<AdminHome />} />
            <Route path="register-teacher" element={<TeacherRegistration />} />
            <Route path="teacher-management" element={<TeacherManagement />} />
            {/* <Route path="knowledge" element={<AdminKnowledge />} /> */}
            <Route path="knowledge" element={<Knowledge />} />
            <Route path="knowledge/Know-details" element={<ClassOverViewDetails />} />
            <Route path="ranking" element={<AdminRanking />} />

            <Route path="game" element={<Game />} />
            <Route path="game/:gameType" element={<StudentGameDetails />} />
            {/* <Route path="game/:gameType/:gameCreate" element={<GameCreate />} /> */}
            <Route path="setting" element={<TSetting />} />

          </Route>



        </Route>

/// teacher routes ///

        <Route path='/teacher' >
          <Route index element={<Signup />} />
          <Route path="signup" element={<Login />} />
          <Route path="forgot-password" element={<Forgotpassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verify-otp" element={<Otp />} />
          <Route path="dashboard" element={<TeachLayout />} >
            <Route index element={<THome />} />
            <Route path="register-user" element={<UserRegistration />} />
            <Route path="management" element={<UserMangement />} />
            <Route path="institute" element={<Institute />} />
            <Route path="generate" element={<Generate />} />
            <Route path="knowledge" element={<Knowledge />} >
            </Route>
            <Route path="ranking" element={<Ranking />} />
            <Route path="game" element={<Game />} />
            <Route path="game/:gameType" element={<StudentGameDetails />} />
            {/* <Route path="game/:gameType/:gameCreate" element={<GameCreate />} /> */}
            <Route path="setting" element={<TSetting />} />
            <Route path="knowledge/Know-details" element={<ClassOverViewDetails />} />
          </Route>
        </Route>

        /// error page
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App