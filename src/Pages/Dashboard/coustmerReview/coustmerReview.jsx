import React from 'react'
import Slider from 'react-slick';
import { Container, Row, Col } from 'reactstrap';
import './coustmer.css'
import Elipe from '../../../assets/images/Ellipse 357.png'
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
                                <h1 className="coustmer-header">Our Customer Reviews</h1>
                            </Col>
                            <Col md="6" className='second-column'>
                                <p className="second-column-p">
                                    Lorem ipsum dolor sit amet consectetur. Maecenas<br /> vivamus urna eu sed eget imperdiet. Quisque viverra leo<br /> quis gravida mattis donec malesuada.
                                </p>
                            </Col>
                        </Row>
                        <Row className='second-row'>
                            <Col md="6" className='third-column'>
                                <Row className='third-column-first-col'>
                                    <p>“</p>
                                </Row>
                                <Row className='third-column-second-col'>
                                    <p >
                                        Lorem ipsum dolor sit amet consectetur. Maecenas vivamus urna eu sed eget imperdiet. Quisque viverra leo quis gravida mattis donec malesuada.
                                    </p>
                                </Row>

                                <Row className='third-column-third-col'>
                                    <div className="image-div">
                                        <img src={Elipe} alt="" />
                                        <p>Lorem ipsum dolor</p>
                                    </div>
                                </Row>


                            </Col>
                            <Col md="6" className='third-column'>
                                <Row className='third-column-first-col'>
                                    <p>“</p>
                                </Row>
                                <Row className='third-column-second-col'>
                                    <p >
                                        Lorem ipsum dolor sit amet consectetur. Maecenas vivamus urna eu sed eget imperdiet. Quisque viverra leo quis gravida mattis donec malesuada.
                                    </p>
                                </Row>

                                <Row className='third-column-third-col'>
                                    <div className="image-div">
                                        <img src={Elipe} alt="" />
                                        <p>Lorem ipsum dolor</p>
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
                                <h1 className="coustmer-header">Our Customer Reviews</h1>
                            </Col>
                            <Col md="6" className='second-column'>
                                <p className="second-column-p">
                                    Lorem ipsum dolor sit amet consectetur. Maecenas<br /> vivamus urna eu sed eget imperdiet. Quisque viverra leo<br /> quis gravida mattis donec malesuada.
                                </p>
                            </Col>
                        </Row>
                        <Row className='second-row'>
                            <Col md="6" className='third-column'>
                                <Row className='third-column-first-col'>
                                    <p>“</p>
                                </Row>
                                <Row className='third-column-second-col'>
                                    <p >
                                        Lorem ipsum dolor sit amet consectetur. Maecenas vivamus urna eu sed eget imperdiet. Quisque viverra leo quis gravida mattis donec malesuada.
                                    </p>
                                </Row>

                                <Row className='third-column-third-col'>
                                    <div className="image-div">
                                        <img src={Elipe} alt="" />
                                        <p>Lorem ipsum dolor</p>
                                    </div>
                                </Row>


                            </Col>
                            <Col md="6" className='third-column'>
                                <Row className='third-column-first-col'>
                                    <p>“</p>
                                </Row>
                                <Row className='third-column-second-col'>
                                    <p >
                                        Lorem ipsum dolor sit amet consectetur. Maecenas vivamus urna eu sed eget imperdiet. Quisque viverra leo quis gravida mattis donec malesuada.
                                    </p>
                                </Row>

                                <Row className='third-column-third-col'>
                                    <div className="image-div">
                                        <img src={Elipe} alt="" />
                                        <p>Lorem ipsum dolor</p>
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
                                <h1 className="coustmer-header">Our Customer Reviews</h1>
                            </Col>
                            <Col md="6" className='second-column'>
                                <p className="second-column-p">
                                    Lorem ipsum dolor sit amet consectetur. Maecenas<br /> vivamus urna eu sed eget imperdiet. Quisque viverra leo<br /> quis gravida mattis donec malesuada.
                                </p>
                            </Col>
                        </Row>
                        <Row className='second-row'>
                            <Col md="6" className='third-column'>
                                <Row className='third-column-first-col'>
                                    <p>“</p>
                                </Row>
                                <Row className='third-column-second-col'>
                                    <p >
                                        Lorem ipsum dolor sit amet consectetur. Maecenas vivamus urna eu sed eget imperdiet. Quisque viverra leo quis gravida mattis donec malesuada.
                                    </p>
                                </Row>

                                <Row className='third-column-third-col'>
                                    <div className="image-div">
                                        <img src={Elipe} alt="" />
                                        <p>Lorem ipsum dolor</p>
                                    </div>
                                </Row>


                            </Col>
                            <Col md="6" className='third-column'>
                                <Row className='third-column-first-col'>
                                    <p>“</p>
                                </Row>
                                <Row className='third-column-second-col'>
                                    <p >
                                        Lorem ipsum dolor sit amet consectetur. Maecenas vivamus urna eu sed eget imperdiet. Quisque viverra leo quis gravida mattis donec malesuada.
                                    </p>
                                </Row>

                                <Row className='third-column-third-col'>
                                    <div className="image-div">
                                        <img src={Elipe} alt="" />
                                        <p>Lorem ipsum dolor</p>
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