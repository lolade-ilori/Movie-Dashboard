import { useContext, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { RiAddFill } from 'react-icons/ri';
import MovieContext, { imgUrl } from '../context/movie/MovieContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function CarouselTabs() {
    const {netflixMovie, getCarouselMovies} = useContext(MovieContext)

    const genre = "https://api.themoviedb.org/3/movie/"

    useEffect(() => {
        getCarouselMovies()
    }, [])

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
            {netflixMovie?.map((netflixMovies) => (
                <SwiperSlide style={{height:'299px', overflow:'hidden'}} key={netflixMovies.id}>
                    <div className="carousel-subcontainer">
                        <div className="carousel-img-wrapper"
                            style={{
                                backgroundImage:`url(${imgUrl}${netflixMovies.backdrop_path})`,
                                backgroundSize:'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat', 
                            }}
                        >
                            <div className="carousel-content">
                                <div className="movie-text-content">
                                    <h2 className='movie-title-text'>{netflixMovies.name}</h2>
                                    <h5 className='movie-genre-carousel'>{netflixMovies.media_type}</h5>
                                    <div className="button-container">
                                        <button onClick={() => console.log('slider')}>watch</button>
                                            <p className="addBtn__styled carousel_add_btn"><RiAddFill  size={25}/></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </div>
  )
}

export default CarouselTabs