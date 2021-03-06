import { useEffect , useContext} from "react"
import BestArtistsCard from "../../components/BestArtistsCard"
import CarouselTabs from "../../components/CarouselTabs"
import ViewMovieCard from "../../components/ViewMovieCard"
import MovieContext from "../../context/movie/MovieContext"

function Main() {
    const {popularMovie, getPopularMovies, popularActor, getPopularActors} = useContext(MovieContext)

    useEffect(() => {
        getPopularMovies()
        getPopularActors()
    }, [])

  return (
    <div className="main-container">
        <CarouselTabs />
        
        <section className="best-artists">
            <div className="header-text"><h3>best artists</h3></div>
            <div className="best-artists_collection">
                {popularActor?.map((actor) => (
                    <BestArtistsCard key={actor.id} actor={actor}/>
                ))}
            </div>
        </section>

        <section className="view-movie">
            <div className="header-text"><h3>continue watching</h3></div>
            <div className="view-movie_collection">
                {popularMovie?.map((movie) => (
                    <ViewMovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
        </section>
    </div>
  )
}

export default Main