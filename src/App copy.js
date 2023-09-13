
import { slide as Menu } from 'react-burger-menu'

import { useState } from 'react'
import './App.css';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';

// import Carousel from 'react-elastic-carousel';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, title: 'item #1' },
    { id: 2, title: 'item #2' },
    { id: 3, title: 'item #3' },
    { id: 4, title: 'item #4' },
    { id: 5, title: 'item #5' }
  ])
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  var settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500
  };
  const showSettings = (event) => {
    event.preventDefault();
  }
  return (
    <>
      <div className="banner">
        {/* <div className="banner-review1 top-left">
          <img className={`profile_pic`} src="images/cl1.jpg" alt="Customer Profile Image" />
          <p><span >"</span> Atricent is a life saver! I hate going to the mall and this app makes shopping for clothes so convenient. <span className={`profile_line`}>"</span> </p>
        </div>
        <div className="banner-review2 top-right">
          <img className={`profile_pic`} src="images/cl2.jpg" alt="Customer Profile Image" />
          <p><span className={`profile_line`}>"</span> The personal stylist feature on Atricent is a game changer. It has helped me step out of my comfort zone and try new things. <span className={`profile_line`}>"</span> </p>
        </div>
        <div className="banner-review3 bottom-left">
          <img className={`profile_pic`} src="images/cl3.jpg" alt="Customer Profile Image" />
          <p><span className={`profile_line`}>"</span> The virtual magic wardrobe feature is amazing. I no longer have to worry about what to wear, Atricent does it for me!<span className={`profile_line`}>"</span> </p>
        </div>
        <div className="banner-review4 bottom-right">
          <img className={`profile_pic`} src="images/cl4.jpg" alt="Customer Profile Image" />
          <p><span className={`profile_line`}>"</span> I used to have a hard time finding clothes that fit my unique style, but Atricent's personalized recommendations have made the process so much easier.<span className={`profile_line`}>"</span> </p>
        </div> */}
        <div className='at-header'>
          <div className='ath-menu-container'>
            {/* <Menu>
              <a id="home" className="menu-item" href="/">Home</a>
              <a id="about" className="menu-item" href="/about">About</a>
              <a id="contact" className="menu-item" href="/contact">Contact</a>
              <a onClick={showSettings} className="menu-item--small" href="">Settings</a>
            </Menu> */}
            <div className='ath-menu'></div>
          </div>
          <div className={'ath-logo'}>
            <img className={`customer_profile_pic`} src="./images/log.png" alt="Customer Profile Image" />
            <h2 className={`tagline`}>Your Smart And Personal Fashion Assistant.</h2>
          </div>
          <a href='#' className='at-header-contact btn btn-primary'>Contact</a>
        </div>

        <div className="banner-content">
          <div className='bc-container'>
            <div className="signup-wrapper">
              <div>
                <h4 className='title'>SignUp For Updates!</h4>
                <form className='at_form'>
                  <input className='at_input' type="email" id="email" name="email" placeholder="Email" required />
                  <button className='at_btn' type="submit">Submit</button>
                </form>
              </div>
              <div className='apps'>
                <a href="#"><img className={`height_40`} src="./images/Capture1.PNG" alt="Customer Profile Image" />  </a>
                <a href="#"><img className={`height_40`} src="./images/Capture2.PNG" alt="Customer Profile Image" /></a>
              </div>
            </div>

            <h1 className='title'>Our happy Customers!</h1>
            <div className='sliders'>
              <div className='customers-wrapper'>
                <Slider {...settings}>
                  <div className='banner-review-item'>
                    <div className="banner-review">
                      <img className={`profile_pic`} src="images/Image1.png" alt="Customer Profile Image" />
                      <p>Name</p><p><span >"</span> Atricent is a life saver! I hate going to the mall and this app makes shopping for clothes so convenient. <span className={`profile_line`}>"</span> </p>
                    </div>
                  </div>
                  <div className='banner-review-item'>
                    <div className="banner-review">
                      <img className={`profile_pic`} src="images/Image3.png" alt="Customer Profile Image" />
                      <p>Name</p><p><span className={`profile_line`}>"</span> The virtual magic wardrobe feature is amazing. I no longer have to worry about what to wear, Atricent does it for me!<span className={`profile_line`}>"</span> </p>
                    </div>
                  </div>
                  <div className='banner-review-item'>
                    <div className="banner-review">
                      <img className={`profile_pic`} src="images/Image2.png" alt="Customer Profile Image" />
                      <p>Name</p><p><span className={`profile_line`}>"</span> The personal stylist feature on Atricent is a game changer. It has helped me step out of my comfort zone and try new things. <span className={`profile_line`}>"</span> </p>
                    </div>
                  </div>
                  <div className='banner-review-item'>
                    <div className="banner-review">
                      <img className={`profile_pic`} src="images/Image4.png" alt="Customer Profile Image" />
                      <p>Name</p><p><span className={`profile_line`}>"</span> The virtual magic wardrobe feature is amazing. I no longer have to worry about what to wear, Atricent does it for me!<span className={`profile_line`}>"</span> </p>
                    </div>
                  </div>

                </Slider>
              </div>
              <div className='app-slider'>
                <Slider {...settings2}>
                  <div className='as-item'>
                    <img className={`asi-item`} src="images/ss1.jpg" alt="Customer Profile Image" />
                  </div>
                  <div className='as-item'>
                    <img className={`asi-item`} src="images/ss1.jpg" alt="Customer Profile Image" />
                  </div>

                </Slider>
                <div className='app-slider-frame'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;
