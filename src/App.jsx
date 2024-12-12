// import Swiper from "swiper"
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination, EffectCoverflow, Keyboard} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import './App.css'

import img_1 from "./assets/img_1.png";
import img_2 from "./assets/img_2.png";
import img_3 from "./assets/img_1.png";
import img_4 from "./assets/img_2.png";
import img_5 from "./assets/img_1.png";
import img_6 from "./assets/img_2.png";
import img_7 from "./assets/img_1.png";
import img_8 from "./assets/img_2.png";
import img_9 from "./assets/img_1.png";
import img_10 from "./assets/img_2.png";
import img_11 from "./assets/img_1.png";
import img_12 from "./assets/img_2.png";


function App() {
  

  return (
    <>
      <div className="content">
        <h1>Slider with Swiper.Js in React</h1>
      </div>

      <div className="wrapper">
      <div className="container">
          <Swiper
          effect={'coverflow'}
          // autoplay={
          //   {
          //     delay: 2000,
          //     disableOnInteraction: false
          //   }
          // }
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={
            {
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: true,
            }
          }
          pagination={
            {
              clickable: true,
              dynamicBullets: true
            }
          }
          navigation={
            {
              clickable: true,
            }
          }
          keyboard={true}
          modules={[Autoplay, EffectCoverflow, Navigation, Pagination, Keyboard]}
          className='swiper_container'
          >
            <SwiperSlide>
              <img src={img_1} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_2} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_3} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_4} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_5} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_6} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_7} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_8} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_9} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_10} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_11} alt="Picture" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img_12} alt="Picture" />
            </SwiperSlide>
          </Swiper>
      </div>
      </div>
    </>
  )
}

export default App
