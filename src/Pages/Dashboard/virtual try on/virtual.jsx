import React, { useState, useEffect } from 'react'
import ImageGirl from '../../../assets/images/image 1031.png'
import './virtual.css'

const Virtual = () => {

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);
    const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 415);


    useEffect(() => {
        const handleWindowResize = () => {
            setIsWideScreen(window.innerWidth > 768);
            setIsMobileScreen(window.innerWidth < 415)
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    const girlImageStyle = {
        width: '60%',
        height: '95%',
        zIndex: 1,
        marginLeft: '20px',
        marginTop:'10px'
    };

    const girlMobileImageStyle = {
        width: '70%',
        height: '70%',
        zIndex: 1,
        marginLeft: '10px',
        marginTop:'180px'
    };

    const divStyles = {
        width: "550px",
        height: "85.66394805908203px",
        top: "1290px",
        left: "81px",
        borderRadius: "13px",
        opacity: "0.6000000238418579px",
        border: 'none',
        background: '#F5F5F5',
        margin: '10px 0px',


    };

    const mobiledivStyles = {
        width: "150px",
        height: "52.66394805908203px",
        marginLeft: '-30%',
        borderRadius: "10px",
        opacity: "0.6000000238418579px",
        border: 'none',
        background: '#F5F5F5',
        marginLeft: '4%',

    };

    const divStylescolor = {
        background: '#70CAD1',
        width: "550px",
        height: "85.66394805908203px",
        top: "1290px",
        left: "81px",
        borderRadius: "13px",
        opacity: "0.6000000238418579px",
        border: 'none',
        margin: '10px 0px',

    }

    const mobiledivStylescolor = {
        background: '#70CAD1',
        width: "150px",
        height: "52.66394805908203px",
        marginLeft: '-30%',
        borderRadius: "10px",
        opacity: "0.6000000238418579px",
        border: 'none',
        marginLeft: '4%'

    }

    const virtalHeader = {
        width: "608px",
        height: "60px",
    }

    const virtualText = {
        width: "567px",
        height: "108px",
    }

    const virtualMobileText = {
        width: "567px",
        height: "108px",
        marginTop:'10%'
    }


    return (
        <div style={{ height: '90vh', width: '100%', display: 'flex', fontFamily: 'Livvic', marginTop: '5vh' }}>
            <div
                style={
                    isWideScreen
                        ? {
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px',
                        }
                        : {
                            flex: 1,
                            display: 'flex',
                            width: '50%',

                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '20px',
                        }
                }


            >
                <div style={virtalHeader}>
                    <h1 className='heading-virtual'>Virtual Try-On</h1>
                </div>
                <div style={isWideScreen ? virtualText : virtualMobileText}>
                    <p className='virtualText-p'>Upload an image of yourself here and select any clothes from your recommendations above to see how they would look on you!</p>
                </div>
                <div style={!isWideScreen ? mobiledivStyles : divStyles}></div>
                <div style={!isWideScreen ? mobiledivStyles : divStyles}></div>
                <div style={!isWideScreen ? mobiledivStylescolor : divStylescolor}></div>
                <div style={!isWideScreen ? mobiledivStyles : divStyles}></div>
                <div style={!isWideScreen ? mobiledivStyles : divStyles}></div>

            </div>
            <div className='girl-section'>
                <img
                    src={ImageGirl}
                    alt="Girl"
                    style={isWideScreen ? girlImageStyle : girlMobileImageStyle}
                />
            </div>
        </div>
    )
}

export default Virtual