import React from 'react'
import './recmondation.css'
import VerticalScroll from './VerticalScroll';

const Recomendation = () => {
  return (
    <div className='main-recomendation'>
        <div className='style-div'>
            <div className='style-div-child'>
            <div className='style-div-header'>
                <p>Style Quiz</p>
            </div>
            <div className='alignment-div'></div>
            <div className='let-us-knew'>
                <p>Let us know your personal style!</p>
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
        <VerticalScroll />
        </div>
    </div>
  )
}

export default Recomendation