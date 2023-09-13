
import { slide as Menu } from 'react-burger-menu'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Welcome from './Pages/Welcome';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import EULA from './Pages/EULA';
import EmptyLayout from './Layouts/EmptyLayout';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route index element={<Welcome />} />
        <Route path="/" element={<EmptyLayout />} >
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/eula' element={<EULA />} />
        </Route>
      </Routes>
    </Router>
  )




}
export default App;