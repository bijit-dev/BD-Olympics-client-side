// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from "../../assets/slide/slide1.jpeg"
import slide2 from "../../assets/slide/slide2.jpeg"
import slide3 from "../../assets/slide/slide3.jpeg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Slide imges={slide1}></Slide></SwiperSlide>
                <SwiperSlide><Slide imges={slide2}></Slide></SwiperSlide>
                <SwiperSlide><Slide imges={slide3}></Slide></SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;