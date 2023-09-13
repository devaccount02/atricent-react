import React, { useState } from 'react'


import Slider from 'react-slick';


const Welcome = () => {
    console.log('process.env.BACKEND_URL', process.env.REACT_APP_BACKEND_URL)
    const [form, setForm] = useState("")
    const [loading, setLoading] = useState(false)
    const [formError, setFormError] = useState({
        empty: null,
        wrong: null,
        succsess: null
    })

    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };
    var settings2 = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500
    };
    const showSettings = (event) => {
        event.preventDefault();
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form })
    };
    const handleForm = async (event) => {
        console.log('clicked')
        event.preventDefault()
        setLoading(true)
        if (form.length === 0) {
            setFormError((prev) => ({ wrong: null, succsess: null, empty: "Please fill the form" }))
            setLoading(false)

        } else {

            await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/v1/subscribe`, requestOptions)




                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    // handle data
                    if (data === 'Email sent successfully') {

                        setFormError((prev) => ({ wrong: null, empty: null, succsess: data }))
                    } else {
                        setFormError((prev) => ({ succsess: null, empty: null, wrong: data }))
                    }
                    console.log('data:', data);
                })
                .catch(error => {
                    console.error('Error:', error);
                    setFormError((prev) => ({ succsess: null, empty: null, wrong: error.message }))
                }).finally(() => setLoading(false))


            // .then(response => response.json())
            // .then(data => {
            //   console.log('data', data)
            //   return setFormError((prev) => ({ wrong: null, empty: null, succsess: data }))
            // })

            // console.log('222222222', error)
            // setFormError((prev) => ({ wrong: error.message, succsess: null }))

            // setLoading(false)


        }
    }
    return (
        <div className='main-welcome'>
            <div className='main-container relative rounded-xl overflow-auto p-8'>
                {/* <div className="container m-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-2 gap-6 space-2"> */}
                <div className="container m-auto md:grid md:grid-cols-2 gap-6 space-2">
                    <div className="tile">
                        <a href='#'>
                            <img src='/images/logo-atricent.png' />
                            {/* <span>Innovate Your Style with Atricent - AI-Powered Fashion Platform</span> */}
                        </a>
                        {/* <h1 className='signup-title font-bold md:text-4xl md:mt-16 xl:mt-36 mb-7 xl:space-adjust'>Sign up for early access and updates!</h1> */}
                        <h1 className='signup-title font-bold md:text-4xl md:mt-16 xl:mt-36 mb-7 xl:space-adjust'>Innovate Your Style with Atricent - AI-Powered Fashion Platform</h1>
                        <p className='mb-7 xxl:10'>Experience the future of fashion with Atricent's personalized AI-driven stylist, ultra-realistic virtual try-on, and interactive wardrobe sharing. Transform the way you shop, create, and share outfits – join our fashion-forward platform and elevate your style game now!. <a href='/privacy-policy'>Privacy Policy</a></p>
                        <i className="fa-sharp fa-light fa-chevrons-right"></i>
                        <form className='formClass' onSubmit={handleForm}>
                            <div className='sub-form mb-6 md:mb-18 xl:mb-24 xl:sub-form'>
                                <input onChange={(e) => setForm(e.target.value)} className='sf-field border rounded-tl-2xl rounded-bl-2xl py-4 px-2 w-5/6' type='email' placeholder='Email' />
                                <button className={`sf-button ${loading && 'loading'} border rounded-tr-2xl rounded-br-2xl py-4 px-2 bg-black text-white	md:w-1/6`} type='submit' disabled={loading ? true : false}>{loading ? 'Loading...' : 'Submit'}</button>
                            </div>
                            {formError['succsess'] === null && formError['empty'] !== null && <div className='formFeedback empty'>{formError.empty}</div>}
                            {formError['succsess'] === null && formError['wrong'] !== null && <div className='formFeedback wrong'>{formError.wrong}</div>}
                            {formError['succsess'] !== null && formError['wrong'] === null && <div className='formFeedback succsess'>{formError.succsess}</div>}
                        </form>

                        <div className='testimonial-slider-wrapper background-1'>

                            <div className='testimonial-slider-placer'>

                            </div>
                            <div className='testimonial-slider'>

                                <Slider {...settings}>
                                    <div className='ts-item'>
                                        <div className='tsi-content'>
                                            <div className='number-picture'>
                                                <div className='tsi-num'>
                                                    <span>1/4</span>
                                                </div>
                                                <div className='tsi-pic'>
                                                    <img src='/images/cl1.jpg' />
                                                </div>
                                            </div>
                                            <strong className='tsi-author'>Michaela Castellani</strong>
                                            <p>Atricent is a life saver!I hate going to the mall and this app makes shopping for cloths so convenient.</p>
                                        </div>
                                    </div>

                                    <div className='ts-item'>
                                        <div className='tsi-content'>
                                            <div className='number-picture'>
                                                <div className='tsi-num'>
                                                    <span>2/4</span>
                                                </div>
                                                <div className='tsi-pic'>
                                                    <img src='/images/cl2.jpg' />
                                                </div>
                                            </div>
                                            <strong className='tsi-author'>Seth White</strong>
                                            <p>The virtual magic wardrobe feature is amazing. I no longer have to worry about what to wear, Atricent does it for me!</p>
                                        </div>
                                    </div>

                                    <div className='ts-item'>
                                        <div className='tsi-content'>
                                            <div className='number-picture'>
                                                <div className='tsi-num'>
                                                    <span>3/4</span>
                                                </div>
                                                <div className='tsi-pic'>
                                                    <img src='/images/cl3.jpg' />
                                                </div>
                                            </div>
                                            <strong className='tsi-author'>Niki Attison</strong>
                                            <p>The personal stylist feature on Atricent is a game changer. It has helped me step out of my comfort zone and try new things.</p>
                                        </div>
                                    </div>

                                    <div className='ts-item'>
                                        <div className='tsi-content'>
                                            <div className='number-picture'>
                                                <div className='tsi-num'>
                                                    <span>4/4</span>
                                                </div>
                                                <div className='tsi-pic'>
                                                    <img src='/images/cl4.jpg' />
                                                </div>
                                            </div>
                                            <strong className='tsi-author'>Emma Belli</strong>
                                            <p>I used to have a hard time finding clothes that fit my unique style, but Atricent's personalized recommendations have made the process so much easier.</p>
                                        </div>
                                    </div>

                                </Slider>

                            </div>
                        </div>
                        <div className='bg-stone-50	rounded-2xl'>


                        </div>

                    </div>
                    <div className="tile right-banner">
                        {/* <div className='hand-slider'> */}
                        <div className='hs-wrap'>
                            <Slider {...settings2}>
                                <div className='as-item'>
                                    <img className={`asi-item`} src="images/ss2.jpg" alt="Customer Profile Image" />
                                </div>
                                <div className='as-item'>
                                    <img className={`asi-item`} src="images/ss3.jpg" alt="Customer Profile Image" />
                                </div>
                                <div className='as-item'>
                                    <img className={`asi-item`} src="images/ss4.jpg" alt="Customer Profile Image" />
                                </div>

                            </Slider>
                        </div>
                        <div className='hand-slider-frame'>
                            <img src="/images/frame-with-hand.png" />
                        </div>
                        {/* </div> */}

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Welcome