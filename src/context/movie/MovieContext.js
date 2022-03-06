import { createContext, useState } from "react";

const MovieContext = createContext()

// Adding url and API Key
const API_KEY = "a4204a643e8f973b0610521d39a6f7e9"
const baseUrl = "https://api.themoviedb.org/3"

// Creating MovieProvider
export const MovieProvider = ({children}) => {
    const [popularMovie, setPopularMovie] = useState()

    const getPopularMovies = async () => {
        const response = await fetch(`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`)

        const data = await response.json()
        console.log(data.results)
        const popMovie = data.results
        setPopularMovie(popMovie)
    }

    return <MovieContext.Provider value={{
        popularMovie,
        getPopularMovies
    }}>
        {children}
    </MovieContext.Provider>
}

export default MovieContext