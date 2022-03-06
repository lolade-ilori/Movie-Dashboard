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

    // Getting Popular Movies API
    const getPopularMovies = async () => {
        const response = await fetch(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`)

        const data = await response.json()
        // console.log(data.results)
        const popMovie = data.results
        setPopularMovie(popMovie)
    }

    // Getting Popular Actors API
    const getPopularActors = async () => {
        const response = await fetch(`${baseUrl}/person/popular?api_key=${API_KEY}&language=en-US&page=1`)

        const data = await response.json()
        // console.log(data.results)
        const popActor = data.results
        setPopularActor(popActor)
    }

    // Getting Netflix Movies API(Fort the Carousel)
    const getCarouselMovies = async () => {
        const response = await fetch(`${baseUrl}/discover/tv?api_key=${API_KEY}&with_networks=213`)

        const data = await response.json()
        const carouselMovie = data.results
        console.log(carouselMovie)
        setNetflixMovie(carouselMovie)  
    }


    return <MovieContext.Provider value={{
        popularMovie,
        popularActor,
        netflixMovie,
        getPopularMovies,
        getPopularActors,
        getCarouselMovies
    }}>
        {children}
    </MovieContext.Provider>
}

export default MovieContext