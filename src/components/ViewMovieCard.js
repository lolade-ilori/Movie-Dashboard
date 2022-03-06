

function ViewMovieCard({movie}) {
  return (
    <div className="viewMovie-card"
    style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.8)), url('https://s35018.pcdn.co/wp-content/uploads/2013/01/Screen-Shot-2013-01-01-at-3.24.48-PM.png')`,
        backgroundSize:'cover'
    }}
    >
        <div className="movieDetails__style">
            <p className="movieCount__style">Matrix Revolution</p>
        </div>  
    </div>
  )
}

export default ViewMovieCard