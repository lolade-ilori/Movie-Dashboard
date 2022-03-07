import JohnWick from '../../assets/img/JohnWick.jpg'
import imdb from '../../assets/img/imdb.png'

function MovieInfoCard() {
  return (
    <div className="info-card">
        <div className="info-container">
            <div className="movie-pic">
                <img src={JohnWick}  alt=""/>
            </div>

            <div className="movie-desc">
                <div className="top-info">
                    <h4 className="movie-title">John Wick</h4>
                    <h5 className="movie-genre">Action, Horror</h5>
                </div>

                <div className="bottom-info">
                    <div className="imdb-pic">
                        <img src={imdb} alt="" />
                    </div>
                    <h4 className="movie-rating">7.4</h4>
                </div>
            </div>
        </div>

        <div className="info-container">
            <div className="movie-pic">
                <img src={JohnWick} alt=""/>
            </div>

            <div className="movie-desc">
                <div className="top-info">
                    <h4 className="movie-title">John Wick</h4>
                    <h5 className="movie-genre">Action, Horror</h5>
                </div>

                <div className="bottom-info">
                    <div className="imdb-pic">
                        <img src={imdb} alt="imdb"/>
                    </div>
                    <h4 className="movie-rating">7.4</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MovieInfoCard