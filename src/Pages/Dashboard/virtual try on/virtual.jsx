import React, { useState, useEffect } from 'react'
import Imagegirl from '../../../assets/images/image 103.png'
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

    console.log({isMobileScreen})

    const girlImageStyle = {
        width: '100%',
        height: '100%',
        zIndex: 1,
    };

    const divStyles = {
        width: "597px",
        height: "104.66394805908203px",
        top: "1290px",
        left: "81px",
        borderRadius: "13px",
        opacity: "0.6000000238418579px",
        border: 'none',
        background: '#F5F5F5',


    };

    const mobiledivStyles = {
        width: "300px",
        height: "52.66394805908203px",
        marginLeft: '-30%',
        borderRadius: "10px",
        opacity: "0.6000000238418579px",
        border: 'none',
        background: '#F5F5F5',
        marginLeft:'4%',



    };

    const divStylescolor = {
        background: '#70CAD1',
        width: "597px",
        height: "104.66394805908203px",
        top: "1290px",
        left: "81px",
        borderRadius: "13px",
        opacity: "0.6000000238418579px",
        border: 'none',

    }

    const mobiledivStylescolor = {
        background: '#70CAD1',
        width: "300px",
        height: "52.66394805908203px",
        marginLeft: '-30%',
        borderRadius: "10px",
        opacity: "0.6000000238418579px",
        border: 'none',
        marginLeft:'4%'

    }

    const virtalHeader = {
        width: "608px",
        height: "73px",
        top: "1088px",
        left: "70px"

    }

    const virtualText = {
        width: "567px",
        height: "108px",
        top: "1163px",
        left: "73px"

    }


    return (
        <div style={{ height: '100vh', width: '100%', display: 'flex', fontFamily: 'Livvic', marginTop: '5vh' }}>
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
                <div style={virtualText}>
                    <p className='virtualText-p'>Upload an image of yourself here and select any clothes from your recommendations above to see how they would look on you!</p>
                </div>
                <div style={!isWideScreen ? mobiledivStyles : divStyles}></div>
                <div style={!isWideScreen ? mobiledivStyles : divStyles}></div>
                <div style={!isWideScreen ? mobiledivStylescolor : divStylescolor}></div>
                <div style={!isWideScreen ? mobiledivStyles : divStyles}></div>
            </div>
            <div className='girl-section'>
                <img
                    src={Imagegirl}
                    alt="Girl"
                    style={girlImageStyle}
                />
            </div>
        </div>
    )
}

export default Virtual