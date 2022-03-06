import { imgUrl } from "../context/movie/MovieContext"
import MovieExtras from "./extras/MovieExtras"


function ViewMovieCard({movie}) {
  return (
    <div className="viewMovie-card"
    style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.8)), url(${imgUrl}${movie.backdrop_path})`,
        backgroundSize:'cover',
        backgroundPosition: 'center'
    }}
    >
        <div className="movieDetails__style">
            <p className="movieCount__style">{movie.title || movie.original_title || movie.name}</p>
        </div>  
    </div>
  )
}

export default ViewMovieCard