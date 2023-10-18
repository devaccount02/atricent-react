import React from 'react'
import './recmondation.css'
import VerticalScroll from './VerticalScroll';

const Recomendation = () => {
    return (
        <div className='main-recomendation'>

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
            <div className='recomendation-div'>
                <p className='recomendation-header'>Your Recomendations:</p>
                <VerticalScroll />
            </div>
        </div>
    )
}

export default Recomendation