import { RiAddFill } from "react-icons/ri"
import { imgUrl } from "../context/movie/MovieContext"


function BestArtistsCard({actor}) {
  return (
    <div className="artist-card"
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imgUrl}${actor.profile_path})`,
        backgroundSize:'cover', backgroundRepeat:'no-repeat'
    }}
    >
        <div className="addBtn__container">
            <p className="addBtn__styled"><RiAddFill  size={25}/></p>
        </div>
        <div className="cardDetails__styled">
            <h3 className="artistName__styled">{actor.name}</h3>
            <p className="movieCount__styled">+{actor.known_for.length} Movies</p>
            <p className="cardRate__styled">5 star</p>
        </div>  
    </div>
  )
}

export default BestArtistsCard