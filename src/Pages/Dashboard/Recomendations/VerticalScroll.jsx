import React from 'react';
// import { List } from 'react-virtualized';
import './VerticalScroll.css';
import cartGirlImg from '../../../assets/images/image\ girl.png'

const VerticalScroll = () => {
//     const divCount = 10; // Total number of divs
// const rowHeight = 285; // Height of each row
   

// const rowRenderer = ({ index, key, style }) => (
//     <div className="scroller-item" key={key} style={style}>
//       {/* Replace the content here with your custom content */}
//       <div className='cart-div'>
//         <div className="car-image-div"></div>
//       </div>
//     </div>
//   );
  return (
//     <div className="vertical-scroller">
//     <h1>Your Recommendations:</h1>
//     <List
//         className="scroll-list" // Add a class name here
//         width={200} // Set your desired width
//         height={550} // Set your desired height
//         rowCount={divCount}
//         rowHeight={rowHeight}
//         rowRenderer={rowRenderer}
//       />

        
//   </div>

<div className='vertical-container'>
  <div className="col-one">
  <div className="col-one-cart">
        <div className="cart-one-img">
            <img src={cartGirlImg} alt="" />
        </div>
        <div className="cart-one-text">
            <div className='cart-one-text-row1'>
                <button>Uniqla</button>
                <p>* 4.9(99 Reviews)</p>
            </div>
            <div className='cart-one-text-row2'>
                <p>Relax Dry Stretch</p>
            </div>
            <div className='cart-one-text-row3'>
                <p>$ 221</p>
            </div>
        </div>
    </div>

    <div className="col-one-cart">
        <div className="cart-one-img">
            <img src={cartGirlImg} alt="" />
        </div>
        <div className="cart-one-text">
            <div className='cart-one-text-row1'>
                <button>Uniqla</button>
                <p>* 4.9(99 Reviews)</p>
            </div>
            <div className='cart-one-text-row2'>
                <p>Relax Dry Stretch</p>
            </div>
            <div className='cart-one-text-row3'>
                <p>$ 221</p>
            </div>
        </div>
    </div>
  </div>
  <div className="col-two">
  <div className="col-one-cart">
        <div className="cart-one-img">
            <img src={cartGirlImg} alt="" />
        </div>
        <div className="cart-one-text">
            <div className='cart-one-text-row1'>
                <button>Uniqla</button>
                <p>* 4.9(99 Reviews)</p>
            </div>
            <div className='cart-one-text-row2'>
                <p>Relax Dry Stretch</p>
            </div>
            <div className='cart-one-text-row3'>
                <p>$ 221</p>
            </div>
        </div>
    </div>
    <div className="col-one-cart">
        <div className="cart-one-img">
            <img src={cartGirlImg} alt="" />
        </div>
        <div className="cart-one-text">
            <div className='cart-one-text-row1'>
                <button>Uniqla</button>
                <p>* 4.9(99 Reviews)</p>
            </div>
            <div className='cart-one-text-row2'>
                <p>Relax Dry Stretch</p>
            </div>
            <div className='cart-one-text-row3'>
                <p>$ 221</p>
            </div>
        </div>
    </div>
  </div>
  <div className="col-three">
  <div className="col-one-cart">
        <div className="cart-one-img">
            <img src={cartGirlImg} alt="" />
        </div>
        <div className="cart-one-text">
            <div className='cart-one-text-row1'>
                <button>Uniqla</button>
                <p>* 4.9(99 Reviews)</p>
            </div>
            <div className='cart-one-text-row2'>
                <p>Relax Dry Stretch</p>
            </div>
            <div className='cart-one-text-row3'>
                <p>$ 221</p>
            </div>
        </div>
    </div>
    <div className="col-one-cart">
    <div className="col-one-cart">
        <div className="cart-one-img">
            <img src={cartGirlImg} alt="" />
        </div>
        <div className="cart-one-text">
            <div className='cart-one-text-row1'>
                <button>Uniqla</button>
                <p>* 4.9(99 Reviews)</p>
            </div>
            <div className='cart-one-text-row2'>
                <p>Relax Dry Stretch</p>
            </div>
            <div className='cart-one-text-row3'>
                <p>$ 221</p>
            </div>
        </div>
    </div>
    </div>
  </div>


</div>

  )
};

export default VerticalScroll;
