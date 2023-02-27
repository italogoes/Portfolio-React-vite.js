import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../assets/styles/Habilidades/Slider.sass'

//img
import html from '../../assets/img/html.jpg'
import css from '../../assets/img/css.png'
import java from '../../assets/img/javascript.png'
import react from '../../assets/img/react.png'
import node from '../../assets/img/node.png'

const Slider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      pagination={true} modules={[Pagination]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={html} alt="" className='tec-logo' /></SwiperSlide>
      <SwiperSlide><img src={css} alt="" className='tec-logo'/></SwiperSlide>
      <SwiperSlide><img src={java} alt="" className='tec-logo'/></SwiperSlide>
      <SwiperSlide><img src={react} alt="" className='tec-logo'/></SwiperSlide>
      <SwiperSlide><img src={node} alt="" className='tec-logo'/></SwiperSlide>
    </Swiper>
  )
}

export default Slider