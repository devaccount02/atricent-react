import React,{useEffect , useState} from 'react';
import { Container, Col } from 'reactstrap';
import Image2 from '../../../assets/images/Vector.png';
import Image3 from '../../../assets/images/northface.png';
import Image4 from '../../../assets/images/zara.png';
import adidas from '../../../assets/images/adidas.png'
const Brands = () => {

    const columnStyles = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const [windowSize, setwindowSize] = useState(window.innerWidth < 768)

    const newIsWideScreen = window.innerWidth < 768;

    useEffect(() => {
        setwindowSize(newIsWideScreen)
    }, [windowSize ,newIsWideScreen])
    

    return (
        <div className="section-brands" style={{ height: '9vh', width: '100%', overflow: 'hidden', marginTop:windowSize ? '80%' : '10%'}}>
            <Container fluid>
                <div style={columnStyles}>
                    <Col xs={2}>
                        <img src={adidas} alt="Image 1" className="img-fluid" />
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
                        <img src={adidas} alt="Image 5" className="img-fluid" />
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