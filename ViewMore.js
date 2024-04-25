import React from 'react'
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ViewMore.css'
import { display, flexbox } from '@mui/system';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

export default function ViewMore() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const [showContent, setShowContent] = useState(false);

    const handleViewMore = () => {
      setShowContent(true);
    };
  return (
    <div className='view'>
          <div className='d-flex justify-content-center mt-1' >
      {!showContent && (
        <button onClick={handleViewMore} className='btn btn-dark ps-4 pe-4 pt-2 pb-2'>View More</button>
      )}

    </div>
    {showContent && (
        <div>
         <div className="slider-container-1 container p-4" >
         <Slider {...settings}>
           <div className='shadow bg-primary p-4 more-cards'>
             <h3>headings</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
             <button className='btn btn-secondary'>Click Here</button>
           </div>
           <div className='shadow bg-primary p-4 more-cards'>
             <h3>headings</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
             <button className='btn btn-secondary'>Click Here</button>
           </div>
           <div className='shadow bg-primary p-4 more-cards' >
             <h3>headings</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
             <button className='btn btn-secondary'>Click Here</button>
           </div>
           <div className='shadow bg-primary p-4 more-cards'>
             <h3>headings</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
             <button className='btn btn-secondary'>Click Here</button>
           </div>
           <div className='shadow bg-primary p-4 more-cards'>
             <h3>headings</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
             <button className='btn btn-secondary'>Click Here</button>
           </div>
           <div className='shadow bg-primary p-4 more-cards'>
             <h3>headings</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
             <button className='btn btn-secondary'>Click Here</button>
           </div>
           <div className='shadow bg-primary p-4 more-cards'>
             <h3>headings</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
             <button className='btn btn-secondary'>Click Here</button>
           </div>
           <div className='shadow bg-primary p-4 more-cards'>
             <h3>headings</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, possimus?</p>
             <button className='btn btn-secondary'>Click Here</button>
           </div>
           
         </Slider>
       </div>
       </div>
      )}
    </div>
  )
}
