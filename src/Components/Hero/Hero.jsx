import { Carousel } from 'antd';
import './Hero.css';

import cashew from "../../assets/OIG3.jpg";
import beach from "../../assets/Goa, India.jpg";
import church from "../../assets/white and blue.jpg";
import sadolxem from "../../assets/Sadolxeml.jpg";

const Hero = () => (
  <>
      <div className='fixed'>
        <span className='wel'><b>Welcome to eProcurement System</b>
        <br />
        <div className='para'>The eProcurement System enables the Tenderers to download the Tender Schedule free of cost and then submit
        the bids online through this portal.</div></span>
        
      </div>
    <div className="carousel-container">
    
      <Carousel arrows infinite={false}>
        <div className="carousel-item">
          <img
            src={sadolxem}
            alt="Image 1"
            className="carousel-content"
          />
        </div>
        <div className="carousel-item">
          <img
            src={beach}
            alt="Image 2"
            className="carousel-content"
          />
        </div>
        <div className="carousel-item">
          <img
            src={cashew}
            alt="Image 3"
            className="carousel-content"
          />
        </div>
        <div className="carousel-item">
          <img
            src={church}
            alt="Image 4"
            className="carousel-content"
          />
        </div>
      </Carousel>
      
      
    </div>
    
    <br />
    
  </>
);

export default Hero;