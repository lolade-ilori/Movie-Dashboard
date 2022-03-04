import { RiSearchLine } from 'react-icons/ri'
import MovieInfoCard from '../movieCard/MovieInfoCard'

function MovieExtras() {
  return (
    <div className='movieExtras-overall'>
      <form>
        <div className="searchbox">
          <RiSearchLine />
          <input type="text" placeholder='Search' />
        </div>
      </form>

      <div className="moviesExtras-subcontainer">
        <h3 className='header-name'>popular movies</h3>
        <MovieInfoCard />
        <button> See More </button>

        <h3 className='header-name'>favorites</h3>
        <MovieInfoCard />
        <button> See More </button>
      </div>
    </div>
  )
}

export default MovieExtras