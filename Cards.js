import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Cards.css"
import DropDown from './DropDown';
import ViewMore from './ViewMore';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" , }}
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

export default function Cards() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
   
    ]}
  return (
    <div className='ms-2 mt-4'>
        <div>
        <div className="container">
    <div className="row ms-5">
      <div className="col-sm-9  first-col shadow">
      <Slider {...settings} className="slider-container">
       
          <div className="card cust-card" >
          <img src="https://www.daimlertruck.com/fileadmin/_processed_/c/9/csm_dt-irshutterstock-1456634990_47c6ceb427.jpg"  alt="..."   className='image-in-carrousel'/>
          <div className="card-body">
            <h5 className="card-title">Stock Market</h5>
            <p className="card-text">Some quick  of the card's content.</p>
          </div>
        </div>
      
      <div  className="card cust-card"  >
  <img src="https://th.bing.com/th/id/OIP.li09mDRRG24mVzKdFEzcWAHaF7?rs=1&pid=ImgDetMain"  alt="..."   className='image-in-carrousel'/>
  <div className="card-body">
    <h5 className="card-title">Digital Market</h5>
    <p className="card-text">Some quick  of the card's content.</p>
  </div>
</div>
     
      <div  className="card cust-card"  >
  <img src="https://th.bing.com/th/id/OIP.-3t72xYAP9yg3PqYdj4eJAHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"  alt="..."   className='image-in-carrousel'/>
  <div className="card-body">
    <h5 className="card-title">Trading</h5>
    <p className="card-text">Some quick  of the card's content.</p>
  </div>
</div>
       
      <div  className="card cust-card"  >
  <img src="https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1273237942/image_1273237942.jpg?io=getty-c-w1536"  alt="..."   className='image-in-carrousel'/>
  <div className="card-body">
    <h5 className="card-title font-bold">Bit Coin</h5>
    <p className="card-text">Some quick  of the card's content.</p>
  </div>
</div>
     
      <div  className="card cust-card"  >
  <img src="https://th.bing.com/th/id/OIP.64tsPBA_AAnlm8D4CE1c1AHaFa?w=244&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"  alt="..."   className='image-in-carrousel'/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick  of the card's content.</p>
  </div>
</div>
      
      <div  className="card cust-card"  >
  <img src='https://static.vecteezy.com/system/resources/previews/000/695/352/original/business-graph-chart-vector.jpg'  alt="..."   className='image-in-carrousel'/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick  of the card's content.</p>
  </div>
  </div>
 
    </Slider>
    <div className='mt-4 d-flex justify-content-center' style={{width:'100%'}}>
      <ViewMore/>
    </div>
      </div>
      <div className="col-sm-3 mb-4">
      <DropDown/>
      </div>
    </div>
    <div>
    </div>
  </div>
        </div>
    </div>
  )
}
