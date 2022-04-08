import { RiSearchLine } from 'react-icons/ri'
import {useContext, useState, useEffect} from 'react'
import MovieInfoCard from '../movieCard/MovieInfoCard'
import MovieContext, {imgUrl} from '../../context/movie/MovieContext'

function MovieExtras() {
const {famousMovies, getFamousMovies, getMovieGenres, movieGenre, getFavoriteMovie, favoriteMovie} = useContext(MovieContext)
const [searchTerm, setSearchTerm] = useState('');
const [find, setFind] = useState([]) 

useEffect(() => {
  getFamousMovies()
  getMovieGenres()
  getFavoriteMovie()
}, [])


useEffect(() => {
  const filteredData = famousMovies?.filter(movie => movie?.original_title?.toLowerCase().includes(searchTerm?.toLowerCase()) || movie?.title?.toLowerCase().includes(searchTerm?.toLowerCase()),);
  setFind(filteredData)
} , [famousMovies, searchTerm])

console.log('>>>>>>+++++', find)




  return (
    <div className='movieExtras-overall'>
      <form>
        <div className="searchbox">
          <RiSearchLine />
          <input type="text" placeholder='Search' onChange={e => setSearchTerm(e.currentTarget.value)} />
        </div>
      </form>

      <div className="moviesExtras-subcontainer">
        <div className="movieExtras-inner">
          <h3 className='header-name'>popular movies</h3>
          {find?.map((famMovies) => (
              <MovieInfoCard key={famMovies.id} movieTitle={famMovies.title || famMovies.original_title} movieImg={(`${imgUrl}${famMovies.backdrop_path}`)} movieRating={famMovies.vote_average} movieGenre={famMovies.genre_ids.map(id => {
                return movieGenre[id]
              })} />
          ))}
        </div>
        <button> See More </button>

        <div className="movieExtras-inner">
          <h3 className='header-name'>favorites</h3>
          {favoriteMovie?.map((favMovie) => (
            <MovieInfoCard key={favMovie.id} movieTitle={favMovie.title || favMovie.original_title} movieImg={(`${imgUrl}${favMovie.backdrop_path}`)}  movieRating={favMovie.vote_average}/>
          ))}
        </div>
        <button> See More </button>
      </div>
    </div>
  )
}

export default MovieExtras