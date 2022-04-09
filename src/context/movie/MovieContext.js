import { createContext, useState } from "react";

const MovieContext = createContext()

// Adding url and API Key
const API_KEY = "a4204a643e8f973b0610521d39a6f7e9"
const baseUrl = "https://api.themoviedb.org/3"
export const imgUrl = "https://image.tmdb.org/t/p/original"

// Creating MovieProvider 
export const MovieProvider = ({children}) => {
    const [popularMovie, setPopularMovie] = useState()
    const [popularActor, setPopularActor] = useState()
    const [netflixMovie, setNetflixMovie] = useState()
    const [movieGenre, setMovieGenre] = useState()
    const [famousMovies, setFamousMovies] = useState()
    const [favoriteMovie, setFavoriteMovie] = useState()

    // Getting Popular Movies API
    const getPopularMovies = async () => {
        // setLoading(true)
        const response = await fetch(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`)

        const data = await response.json()
        // console.log(data.results)
        const popMovie = data.results
        setPopularMovie(popMovie)
        // setLoading(false)
    }

    // Getting Popular Actors API
    const getPopularActors = async () => {
        // setLoading(true)
        const response = await fetch(`${baseUrl}/person/popular?api_key=${API_KEY}&language=en-US&page=1`)

        const data = await response.json()
        // console.log(data.results)
        const popActor = data.results
        setPopularActor(popActor)
        // setLoading(false)
    }

    // Getting Netflix Movies API(Fort the Carousel)
    const getCarouselMovies = async () => {
        // setLoading(true)
        const response = await fetch(`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`)

        const data = await response.json()
        const carouselMovie = data.results
        console.log(carouselMovie)
        setNetflixMovie(carouselMovie)  
        // setLoading(false)
    }

    // Getting FamousMovies
    const getFamousMovies  = async () => {
        const response = await fetch(`${baseUrl}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)

        const data = await response.json()
        const famousMovie = data.results
        console.log(famousMovie)
        setFamousMovies(famousMovie)
    }

    // Get MovieGenre
    const getMovieGenres = async () => {
        // setLoading(true)
        const response = await fetch(`${baseUrl}/genre/movie/list?api_key=${API_KEY}&language=en-US`)

        const data = await response.json()
        const dataGenre =  data.genres
        const dataGenreResults = dataGenre.reduce((genres, gen) => {
            const { id, name } = gen
            genres[id] = name
            return genres
        }, [])
        console.log(dataGenreResults)
        setMovieGenre(dataGenreResults)
        // setLoading(false)

    }

    // Get Favorite Mvoies
    const getFavoriteMovie = async () => {
        // setLoading(true)
        const response = await fetch(`${baseUrl}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)

        const data = await response.json()
        const dataResults = data.results;
        setFavoriteMovie(dataResults)
        // setLoading(false)
    }


    return <MovieContext.Provider value={{
        popularMovie,
        popularActor,
        netflixMovie,
        famousMovies,
        movieGenre,
        favoriteMovie,
        getPopularMovies,
        getPopularActors,
        getCarouselMovies,
        getFamousMovies,
        getMovieGenres,
        getFavoriteMovie
    }}>
        {children}
    </MovieContext.Provider>
}

export default MovieContext