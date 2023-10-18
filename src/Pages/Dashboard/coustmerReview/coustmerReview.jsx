import React from 'react'
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import './coustmer.css'
import Elipe from '../../../assets/images/Ellipse 357.png'
import Elipe2 from '../../../assets/images/Ellipse 358.png'
import arrow1 from '../../../assets/images/arrow one.png'
import arrow2 from '../../../assets/images/arrow two.png'

const CoustmerReview = () => {


    const CustomPrevArrow = (props) => (
        <div
            className="custom-prev-arrow"
            onClick={props.onClick}
        >
            <img src={arrow1} alt="" />
        </div>
    );

    const CustomNextArrow = (props) => (
        <div
            className="custom-next-arrow"
            onClick={props.onClick}
        >
            <img src={arrow2} alt="" />
        </div>
    );


    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 1500,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };
    return (
        <div>


            <Slider {...settings}>
                <div className='as-item'>
                    <Container className='coustmer-container'>
                        <Row className='first-row'>
                            <Col md="6" className='first-column'>
                                <h1 className="coustmer-header">What People<br /> Say</h1>
                            </Col>
                            <Col md="6" className='second-column'>
                                <p className="second-column-p">
                                    Atricent is the next revolution in fashion and our beta testing reviews show that. Once you start using this AI-Powered Social Fashion app, there is a chance you may never go back!
                                </p>

                            </Col>
                        </Row>
                        <Row className='second-row'>
                            <Col md="6" className='third-column '>
                                <Row className='third-column-first-col'>
                                    <p>“</p>
                                </Row>
                                <Row className='third-column-second-col'>
                                    <p >
                                        Best App Ever!! I started using this app and my mornings are so simple. I just wake up and the AI generates an outfit for me based on the occasion, weather and my style.
                                    </p>
                                </Row>

                                <Row className='third-column-third-col'>
                                    <div className="image-div">
                                        <img src={Elipe} alt="" />
                                        <p className='Antoni'> Antoni Stebelski</p>
                                    </div>
                                </Row>


                            </Col>
                            <Col md="6" className='third-column third-col-border'>
                                <Row className='third-column-first-col'>
                                    <p>“</p>
                                </Row>
                                <Row className='third-column-second-col '>
                                    <p >
                                        This is the real life version of Cher’s Closet. I do not know why no one has thought of this before. It is like the Spotify of Fashion and I am in love with it.
                                    </p>
                                </Row>

                                <Row className='third-column-third-col'>
                                    <div className="image-div">
                                        <img src={Elipe2} alt="" />
                                        <p className='Leo'>Leo L.</p>
                                    </div>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='as-item'>
                    <Container className='coustmer-container'>
                        <Row className='first-row'>
                            <Col md="6" className='first-column'>
                                <h1 className="coustmer-header">What People<br /> Say</h1>
                            </Col>
                            <Col md="6" className='second-column'>
                                <p className="second-column-p">
                                    Atricent is the next revolution in fashion and our beta testing reviews show that. Once you start using this AI-Powered Social Fashion app, there is a chance you may never go back!
                                </p>

                            </Col>
                        </Row>
                        <Row className='second-row'>
                            <Col md="6" className='third-column '>
                                <Row className='third-column-first-col'>
                                    <p>“</p>
                                </Row>
                                <Row className='third-column-second-col'>
                                    <p >
                                        Best App Ever!! I started using this app and my mornings are so simple. I just wake up and the AI generates an outfit for me based on the occasion, weather and my style.
                                    </p>
                                </Row>

                                <Row className='third-column-third-col'>
                                    <div className="image-div">
                                        <img src={Elipe} alt="" />
                                        <p className='Antoni'> Antoni Stebelski</p>
                                    </div>
                                </Row>


                            </Col>
                            <Col md="6" className='third-column third-col-border'>
                                <Row className='third-column-first-col'>
                                    <p>“</p>
                                </Row>
                                <Row className='third-column-second-col'>
                                    <p >
                                        This is the real life version of Cher’s Closet. I do not know why no one has thought of this before. It is like the Spotify of Fashion and I am in love with it.
                                    </p>
                                </Row>

                                <Row className='third-column-third-col'>
                                    <div className="image-div">
                                        <img src={Elipe2} alt="" />
                                        <p className='Leo'>Leo L.</p>
                                    </div>
                                </Row>




                            </Col>
                        </Row>
                    </Container>
                </div>
                
            </Slider>
        </div>


    )
}

export default CoustmerReview