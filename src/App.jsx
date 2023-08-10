import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import FeaturesBlocks from './partials/FeaturesBlocks';

function App() {

  const location = useLocation();
  
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });


  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    AOS.refresh();
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/uncpm-dev-website/" element={<Home />} />
        <Route path="/uncpm-dev-website/signin/" element={<SignIn />} />
        <Route path="/uncpm-dev-website/signup/" element={<SignUp />} />
        <Route path="/reset-password/" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
