import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './recom.css'
import imageGirl from '../../../assets/images/image_103-removebg-preview.png'

const RecomendationCopy = () => {
  return (
    <div className="container-rc">
      <div className="wrapper">
        <div className="black-background">
          <div className='back-image'>
            <div className='style-div'>

              <div className='style-div-child'>
                <div className='style-div-header'>
                  <h2>Style Quiz</h2>
                </div>
                <div className='alignment-div'></div>
                <div className='let-us-knew'>
                  <p>Let us know<br /> your personal<br /> style!</p>
                </div>
                <div className='swipe-right'>
                  <p>Swipe right to like and left to dislike!</p>
                </div>
                <button className='get-started-btn'>
                  <p>Get Started</p>
                  <div className='btn-arrow'></div>
                </button>

              </div>
            </div>
          </div>
        </div>
        <div className="boxes">
          <div className='recomendation-heading'>
            <h1>Your Recomendations:</h1>
          </div>
          <Container fluid style={{paddingLeft:'40px'}}>
            <Row>
              <Col md={4} xs={6}>
                <div className="col-one-cart1">
                  <div className="cart-one-img1">
                    <img src={imageGirl} alt="" />
                  </div>
                  <div className="cart-one-text1">
                    <div className='cart-one-text-row11'>
                      <button>Uniqla</button>
                      <p>* 4.9(99 Reviews)</p>
                    </div>
                    <div className='cart-one-text-row21'>
                      <p>Relax Dry Stretch</p>
                    </div>
                    <div className='cart-one-text-row31'>
                      <p>$ 221</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} xs={6}>
                <div className="col-one-cart1">
                  <div className="cart-one-img1">
                    <img src={imageGirl} alt="" />
                  </div>
                  <div className="cart-one-text1">
                    <div className='cart-one-text-row11'>
                      <button>Uniqla</button>
                      <p>* 4.9(99 Reviews)</p>
                    </div>
                    <div className='cart-one-text-row21'>
                      <p>Relax Dry Stretch</p>
                    </div>
                    <div className='cart-one-text-row31'>
                      <p>$ 221</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} xs={6}>
                <div className="col-one-cart1">
                  <div className="cart-one-img1">
                    <img src={imageGirl} alt="" />
                  </div>
                  <div className="cart-one-text1">
                    <div className='cart-one-text-row11'>
                      <button>Uniqla</button>
                      <p>* 4.9(99 Reviews)</p>
                    </div>
                    <div className='cart-one-text-row21'>
                      <p>Relax Dry Stretch</p>
                    </div>
                    <div className='cart-one-text-row31'>
                      <p>$ 221</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} xs={6}>
                <div className="col-one-cart1">
                  <div className="cart-one-img1">
                    <img src={imageGirl} alt="" />
                  </div>
                  <div className="cart-one-text1">
                    <div className='cart-one-text-row11'>
                      <button>Uniqla</button>
                      <p>* 4.9(99 Reviews)</p>
                    </div>
                    <div className='cart-one-text-row21'>
                      <p>Relax Dry Stretch</p>
                    </div>
                    <div className='cart-one-text-row31'>
                      <p>$ 221</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} xs={6}>
                <div className="col-one-cart1">
                  <div className="cart-one-img1">
                    <img src={imageGirl} alt="" />
                  </div>
                  <div className="cart-one-text1">
                    <div className='cart-one-text-row11'>
                      <button>Uniqla</button>
                      <p>* 4.9(99 Reviews)</p>
                    </div>
                    <div className='cart-one-text-row21'>
                      <p>Relax Dry Stretch</p>
                    </div>
                    <div className='cart-one-text-row31'>
                      <p>$ 221</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={4} xs={6}>
                <div className="col-one-cart1">
                  <div className="cart-one-img1">
                    <img src={imageGirl} alt="" />
                  </div>
                  <div className="cart-one-text1">
                    <div className='cart-one-text-row11'>
                      <button>Uniqla</button>
                      <p>* 4.9(99 Reviews)</p>
                    </div>
                    <div className='cart-one-text-row21'>
                      <p>Relax Dry Stretch</p>
                    </div>
                    <div className='cart-one-text-row31'>
                      <p>$ 221</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default RecomendationCopy