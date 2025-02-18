import React from 'react';
import SimpleParallax from 'simple-parallax-js';
// import Tilt from 'react-parallax-tilt';
import aboutIgm from '../../../assets/jametlene-reskp-VDrErQEF9e4-unsplash.jpg';
const AboutUs = () => {
  return (
    <div>
      <h2 className="text-center text-4xl ">About Us</h2>

      <p className="text-center ">
        We help shelters and rescue groups save pets.<br></br> Learn more and
        meet our team.
      </p>

      <div className="lg:flex mt-10">
        {/* <div className="lg:w-6/12 bg-light-green-600">
          <div className=" py-44 w-96  mx-auto   ">
            <h2 className="text-4xl text-white font-bold  ">About us</h2>
            <p className="text-white">
              we can give these pets the life they deserve. Join our mission and
              be the voice they cannot have. Your compassion can transform
              lives—one paw at a time
            </p>
          </div>
        </div> */}
        <div className="lg:w-6/12 ">
          {/* <Tilt tiltAngleXInitial={20} tiltAngleYInitial={20}>
            <img src={aboutIgm} alt="" />
            
          </Tilt> */}
        </div>
      </div>
      <SimpleParallax orientation="right">
        <img src={aboutIgm} alt={'image'} />
      </SimpleParallax>
    </div>
  );
};

export default AboutUs;
