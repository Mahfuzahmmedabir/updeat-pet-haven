import AboutUs from '../AboutUs/AboutUs';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import Category from '../Category/Category';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="">
      <Helmet>
              <title>
                Pet-haven || Home
              </title>
            </Helmet>
      <SwiperSlider></SwiperSlider>
      <Category></Category>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
