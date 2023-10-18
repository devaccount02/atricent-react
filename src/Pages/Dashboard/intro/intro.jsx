import React from 'react';

import { Row, Col, Container } from "reactstrap";
import IntroImage from '../../../assets/images/Rectangle 18916.png'
import './intro.css'

const Intro = () => {
    return (
        <Container style={{ height: '90vh', width: '100%', marginTop: '5vh' }}>
            <Col>
                <Row className='intro-div'>
                    <h2 className='intotxt'>Introducing Atricent:</h2>
                </Row>
                <Row className='intro-paragraph'>
                    <p className='intro-p'>Where AI <span className='intro-p-hard'>Redefines Fashion!</span> Kickstart your style journey with our in-depth quiz. Access your <span className='intro-p-hard'>curated recommendations</span> from a vast brand repertoire and curate your <span className='intro-p-hard'>digital wardrobe</span> making it easy to mix and match clothes and create outfits in the morning with our <span className='intro-p-hard'>Award Winning AI Stylist.</span> Share your creations, earn rewards, and shop seamlessly.<span className='intro-p-hard'>Virtually try on</span> every piece. With Atricent, immerse yourself in a fashion revolution like never before making it easy for everyone.</p>
                </Row>

                <Row className='intro-image'>
                    <img src={IntroImage} alt="" />
                </Row>
            </Col>
        </ Container>
    )
}

export default Intro