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
import { Link, useNavigate } from 'react-router-dom';

const App = () => {
  const [error, setError] = useState<string[]>([]);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    gender: ''
  });

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const name = formData.get('user') as string | null;
    const email = formData.get('email') as string | null;
    const password = formData.get('password') as string | null;
    const confirmPassword = formData.get('confirmPassword') as string | null;
    const gender = formData.get('gender') as string | null;

    const errors: string[] = [];

    if (!name) {
      errors.push('* El nombre es requerido.');
    }

    if (!email) {
      errors.push('* El correo electrónico es requerido.');
    }

    if (!password) {
      errors.push('* La contraseña es requerida.');
    }

    if (password && confirmPassword !== password) {
      errors.push('* Las contraseñas no coinciden.');
    }

    if (!gender) {
      errors.push('* El género es requerido.');
    }

    setError(errors);



    // Actualiza el estado con los datos del usuario
    if (name && email && gender) {
      setUserData({
        name,
        email,
        gender
      });
    }
  };

  const [auth, setAuth] = useState(false);


  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Inicio auth={auth} setAuth={setAuth} />} />
            <Route path="/account" element={<Account />} />
            <Route path='/signUp' element={<SignUp handleForm={handleForm} error={error} />} />
            <Route path='/signIn' element={<SignIn handleForm={handleForm} error={error} />} />
            <Route path="/main" element={<Main userData={userData} />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/community" element={<Community />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

        </div>
      </Router>
  );
};

export default App;
