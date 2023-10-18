import React from 'react'
import './email.css'
import {  Row } from 'reactstrap';


const Email = () => {
  return (
   <div className='main-email-container'>
     <div className='email-container'>
        <Row className='main-email-row'>
            <Row className='main-email-row-first'>
                <h1>Join the waiting list.</h1>
            </Row>
            <Row className='main-email-row-second'>
                <p>Enter your email to get enrolled in our newsletter and updates.</p>
            </Row>
            <div className='main-email-row-third'>
                <div className='email-placeholder'>
                    <p className='email-txt'>Email</p>
                    <button className='email-btn'>Send</button>
                </div>
            </div>
        </Row>
    </div>
   </div>
  )
}

export default Email