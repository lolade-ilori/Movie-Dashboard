import {useEffect} from 'react'
import JohnWick from '../../assets/img/JohnWick.jpg'
import imdb from '../../assets/img/imdb.png'

const MovieInfoCard = ({movieTitle, movieImg, movieRating, movieGenre}) => {


  return (
    <div className="info-card">
        <div className="info-container">
            <div className="movie-pic">
                <img src={movieImg}  alt=""/>
            </div>

            <div className="movie-desc">
                <div className="top-info">
                    <h4 className="movie-title">{movieTitle}</h4>
                    <h5 className="movie-genre">{movieGenre}</h5>
                </div>

                <div className="bottom-info">
                    <div className="imdb-pic">
                        <img src={imdb} alt="" />
                    </div>
                    <h4 className="movie-rating">{movieRating}</h4>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MovieInfoCard