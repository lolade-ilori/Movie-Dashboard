import { RiAddFill } from "react-icons/ri"


function BestArtistsCard() {
  return (
    <div className="artist-card"
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTkqugX0WLc78TSUXjzYAQvwT7nqU8vJknuJGldrNv0FO7kD8vl")`,
        backgroundSize:'cover', backgroundRepeat:'no-repeat'
    }}
    >
        <div className="addBtn__container">
            <p className="addBtn__styled"><RiAddFill  size={25}/></p>
        </div>
        <div className="cardDetails__styled">
            <h3 className="artistName__styled">Keanu Reaves</h3>
            <p className="movieCount__styled">+27 Movies</p>
            <p className="cardRate__styled">5 star</p>
        </div>  
    </div>
  )
}

export default BestArtistsCard