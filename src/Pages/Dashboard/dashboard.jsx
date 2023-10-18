import React from 'react'
import NavTop from './Navbar/navbar';
import Brands from './barnds/brands';
import Virtual from './virtual try on/virtual';
import Intro from './intro/intro';
import CoustmerReview from './coustmerReview/coustmerReview';
import Email from '../Dashboard/emailSection/email'
import Mobile from './mobilesection/mobile';
import Contact from './contact us/contact';
import RecomendationCopy from './recomendationCopy/recomendationCopy';

const Dashboard = () => {
  return (
    <>
      <NavTop />
      <RecomendationCopy />
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