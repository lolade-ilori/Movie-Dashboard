import { RiAddFill } from "react-icons/ri"
import { imgUrl } from "../context/movie/MovieContext"


function BestArtistsCard({actor}) {
  const StarReview = ({rating}) => {
    var starComponents = []

    // Full star is whatever the rating will be having in mind we have a max of 5 stars
    var fullStar = Math.floor(+rating)
    // console.log(fullStar)

    // No star is whatever is left after fullstar, i.e max number of stars minus rating gives us no star
    var noStar = Math.floor(5 - +rating)
    // console.log(noStar)

    // Half star- when you take into context the full star and no star values and you subtract htem from tha max no of stars you get the half star
    var halfStar = 5 - fullStar - noStar
    // console.log(halfStar)

    // full star
    for (var i = 0; i < fullStar; i++) {
      starComponents.push(
        <img
          src="https://img.icons8.com/fluency/344/filled-star.png"
          className="starRating__styled"
          alt=""
        />
      )
    }

    //half star
    for (var i = 0; i < halfStar; i++) {
      starComponents.push(
        <img
          src="https://img.icons8.com/color/344/star-half-empty.png"
          className="starRating__styled"
          alt=""
        />
      )
    }

    //no star
    for (var i = 0; i < noStar; i++) {
      starComponents.push(
        <img
          src="https://img.icons8.com/color/344/star--v1.png"
          className="starRating__styled"
          alt=""
        />
      )
    }

    return (
      <div>
        {starComponents}
        {/* <p>{rating}</p> */}
      </div>
    )

  }



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
            <p className="cardRate__styled"><StarReview rating={actor.popularity / 30 }/></p>
        </div>  
    </div>
  )
}

export default BestArtistsCard