import BestArtistsCard from "../../components/BestArtistsCard"
import CarouselTabs from "../../components/CarouselTabs"

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
    </div>
  )
}

export default Main