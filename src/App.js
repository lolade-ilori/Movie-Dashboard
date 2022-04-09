import MovieExtras from './components/extras/MovieExtras'
import Navbar from './components/navbar/Navbar'
import Main from './pages/main/Main'
import MovieContext, {MovieProvider} from './context/movie/MovieContext'
import { useContext } from 'react'

function App() { 
  // const {loading} = useContext(MovieContext)

  return (
    <MovieProvider>
        {/* {loading ? <div>LOADING</div> : */}
          <div className='app-overall'>
              <Navbar />
              <Main />
              <MovieExtras />
          </div>
        {/* } */}
    </MovieProvider>
  )
}

export default App