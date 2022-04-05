import { RiSearchLine } from 'react-icons/ri'
import {useContext, useState, useEffect} from 'react'
import MovieInfoCard from '../movieCard/MovieInfoCard'
import MovieContext from '../../context/movie/MovieContext'

function MovieExtras() {
const {famousMovies, getFamousMovies} = useContext(MovieContext)
const [searchTerm, setSearchTerm] = useState('');
const [find, setFind] = useState([]) 

useEffect(() => {
  getFamousMovies()
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
        <h3 className='header-name'>popular movies</h3>
        {find?.map((famMovies) => (
            <MovieInfoCard key={famMovies.id} movieTitle={famMovies.title || famMovies.original_title} />
        ))}
        <button> See More </button>

        <h3 className='header-name'>favorites</h3>
        <MovieInfoCard />
        <button> See More </button>
      </div>
    </div>
  )
}

export default MovieExtras