import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Inicio from "@/pages/Inicio";
import Main from "@/pages/Main";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
import NotFound from "@/components/NotFound";
import Community from "@/pages/Community"
import MyAccount from '@/pages/MyAccount'
import Account from '@/pages/Account'
import Courses from '@/pages/Courses';
import Challenges from '@/pages/Challenges'
import Blog from '@/pages/Blog'
import MyCourses from '@/pages/MyCourses'
import DashboardAdmin from '@/pages/DashboardAdmin'
import Course from '@/pages/Course'
import ScrollToTop from '@/components/ScrollToTop'
import AdminUsers from '@/pages/AdminUsers'
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from "@/context/authContext";
import ProtectedRoute from './components/ui/ProtectedRoute';
// import { CursorTwo } from "cursor-style";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          {/* <CursorTwo
          size={40}
          delay={8}
          sizeDot={7}import { AuthProvider } from "./contexts/authContext";
          sizeOutline={50}
          bgColorDot="white"
          bgColorOutline="white"
        /> */}

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/signIn' element={<SignIn />} />

            <Route path="/main" element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            } />

            <Route path="/courses" element={
              <ProtectedRoute>
                <Courses />
              </ProtectedRoute>
            } />

            <Route path="/myaccount" element={
              <ProtectedRoute>
                <MyAccount />
              </ProtectedRoute>
            } />

            <Route path="/account" element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } />

            <Route path="/community" element={
              <ProtectedRoute>
                <Community />
              </ProtectedRoute>
            } />

            <Route path="/challenges" element={
              <ProtectedRoute>
                <Challenges />
              </ProtectedRoute>
            } />

            <Route path="/blog" element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            } />

            <Route path="/mycourses" element={
              <ProtectedRoute>
                <MyCourses />
              </ProtectedRoute>
            } />

            <Route path="/dashboardadmin" element={
              <ProtectedRoute>
                <DashboardAdmin />
              </ProtectedRoute>
            } />

            <Route path="/course" element={
              <ProtectedRoute>
                <Course />
              </ProtectedRoute>
            } />

            <Route path="/adminusers" element={
              <ProtectedRoute>
                <AdminUsers />
              </ProtectedRoute>
            } />

            <Route path="*" element={
              <NotFound />
            } />

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
