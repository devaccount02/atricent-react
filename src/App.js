
import { slide as Menu } from 'react-burger-menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Welcome from './Pages/Welcome';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import EULA from './Pages/EULA';
import EmptyLayout from './Layouts/EmptyLayout';
import Dashboard from './Pages/Dashboard/dashboard';
import Redirection from './Pages/redirection';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path='/home' element={<Dashboard />} />
        <Route path='/apps' element={<Redirection />} />
        <Route path="/" element={<EmptyLayout />} >
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/eula' element={<EULA />} />
        </Route>
      </Routes>
    </Router>
  )




}
export default App;
