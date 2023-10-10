import React from 'react'
import NavTop from './Navbar/navbar';
import Recomendation from './Recomendations/recomendation';
import Brands from './barnds/brands';
import Virtual from './virtual try on/virtual';
import Intro from './intro/intro';
import CoustmerReview from './coustmerReview/coustmerReview';
import Email from '../Dashboard/emailSection/email'
import Mobile from './mobilesection/mobile';
import Contact  from './contact us/contact';

const Dashboard = () => {
  return (
    <>
       <NavTop />
       <Recomendation />
        <Brands />
       <Virtual />
       <Intro />
       <CoustmerReview />
       <Email />
       <Mobile />
       <Contact />
    </>
  )
}

export default Dashboard