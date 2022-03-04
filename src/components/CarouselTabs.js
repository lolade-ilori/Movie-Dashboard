import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function CarouselTabs() {
  return (
    <div className="carousel-tabs_container">
        <div className="tab-header">
            <ul>
                <li>TV Series</li>
                <li>Movies</li>
                <li>Animes</li>
            </ul>
        </div>
        <div className="carousel-container">
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide style={{height:'299px', border:'solid 1px blue', overflow:'hidden'}}>
                Slide 1
            </SwiperSlide>
            <SwiperSlide style={{height:'299px'}}>Slide 2</SwiperSlide>
            <SwiperSlide style={{height:'299px'}}>Slide 3</SwiperSlide>
            <SwiperSlide style={{height:'299px'}}>Slide 4</SwiperSlide>
            ...
        </Swiper>
        </div>
    </div>
  )
}

export default CarouselTabs