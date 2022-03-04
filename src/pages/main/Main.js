import BestArtistsCard from "../../components/BestArtistsCard"
import CarouselTabs from "../../components/CarouselTabs"
import ViewMovieCard from "../../components/ViewMovieCard"

function Main() {
  return (
    <div className="main-container">
        <CarouselTabs />
        
        <section className="best-artists">
            <div className="header-text"><h3>best artists</h3></div>
            <div className="best-artists_collection">
                <BestArtistsCard />
            </div>
        </section>

        <section className="view-movie">
            <div className="header-text"><h3>continue watching</h3></div>
            <div className="view-movie_collection">
                <ViewMovieCard />
            </div>
        </section>
    </div>
  )
}

export default Main