import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image1 from '../../../assets/images/Group.png'; // Import your images
import Image2 from '../../../assets/images/Vector.png';
import Image3 from '../../../assets/images/northface.png';
import Image4 from '../../../assets/images/zara.png';

const Brands = () => {

    const columnStyles = {
        display: 'flex',
        justifyContent: 'space-between',
        // overflowX: 'auto',// Adjust as needed
    };

    return (
        <div className="section-brands" style={{ height: '6.6vh', width: '100%', marginTop: '5vh', overflow: 'hidden' }}>
            <Container fluid>
                <div style={columnStyles}>
                    <Col xs={2}>
                        <img src={Image1} alt="Image 1" className="img-fluid" />
                    </Col>
                    <Col xs={2}>
                        <img src={Image2} alt="Image 2" className="img-fluid" />
                    </Col>
                    <Col xs={2}>
                        <img src={Image3} alt="Image 3" className="img-fluid" />
                    </Col>
                    <Col xs={2}>
                        <img src={Image4} alt="Image 4" className="img-fluid" />
                    </Col>
                    <Col xs={2}>
                        <img src={Image1} alt="Image 5" className="img-fluid" />
                    </Col>
                    <Col xs={2}>
                        <img src={Image4} alt="Image 4" className="img-fluid" />
                    </Col>

                </div>
            </Container>
        </div>
    );
};

export default Brands