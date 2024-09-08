import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Inicio from "@/pages/Inicio";
import Main from "@/pages/Main";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
import NotFound from "@/components/NotFound";
import Community from "@/pages/Community"
import Account from '@/pages/Account'
import Courses from '@/pages/Courses';
import Challenges from '@/pages/Challenges'
import Blog from '@/pages/Blog'
import MyCourses from '@/pages/MyCourses'
import DashboardAdmin from '@/pages/DashboardAdmin'
import Course from '@/pages/Course'
import ScrollToTop from '@/components/ScrollToTop'
import { Link, useNavigate } from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <ScrollToTop/>
        <div className="App">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/account" element={<Account />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/signIn' element={<SignIn/>} />
            <Route path="/main" element={<Main />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/community" element={<Community />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/dashboardadmin" element={<DashboardAdmin />} />
            <Route path="/course" element={<Course />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </Router>
  );
};

export default App;
