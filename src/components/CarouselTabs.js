import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { RiAddFill } from 'react-icons/ri';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function CarouselTabs() {
    const swiper = useSwiper();

  return (
    <div className="carousel-tabs_container">
        <div className="tab-header">
            <ul>
                <li>TV Series</li>
                <li className='tab-active'>Movies</li>
                <li>Animes</li>
            </ul>
        </div>
        <div className="carousel-container">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide style={{height:'299px', overflow:'hidden'}}>
                <div className="carousel-subcontainer">
                    <div className="carousel-img-wrapper"
                        style={{
                            backgroundImage:`url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700463330.jpg')`,
                            backgroundSize:'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat', 
                        }}
                    >
                        <div className="carousel-content">
                            <div className="movie-text-content">
                                <h2 className='movie-title-text'>deadpool</h2>
                                <h5 className='movie-genre-carousel'>action adventure comedy</h5>
                                <div className="button-container">
                                    <button onClick={() => console.log('slider')}>watch</button>
                                        <p className="addBtn__styled carousel_add_btn"><RiAddFill  size={25}/></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{height:'299px'}}>Slide 2</SwiperSlide>
            <SwiperSlide style={{height:'299px'}}>Slide 3</SwiperSlide>
            <SwiperSlide style={{height:'299px'}}>Slide 4</SwiperSlide>
            
        </Swiper>
        </div>
    </div>
  )
}

export default CarouselTabs