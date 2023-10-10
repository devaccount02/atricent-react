import React from 'react'
import './email.css'
import { Container, Row } from 'reactstrap';


const Email = () => {
  return (
    <Container className='email-container'>
        <Row className='main-email-row'>
            <Row className='main-email-row-first'>
                <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            </Row>
            <Row className='main-email-row-second'>
                <p>Lorem ipsum dolor sit amet consectetur. Maecenas<br /> vivamus urna eu sed eget imperdiet. etur.</p>
            </Row>
            <Row className='main-email-row-third'>
                <div className='email-placeholder'>
                    <p className='email-txt'>Email</p>
                    <button className='email-btn'>Send</button>
                </div>
            </Row>
        </Row>
    </Container>
  )
}

export default Email