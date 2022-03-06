import MovieExtras from './components/extras/MovieExtras'
import Navbar from './components/navbar/Navbar'
import Main from './pages/main/Main'
import {MovieProvider} from './context/movie/MovieContext'

function App() {
  return (
    <MovieProvider>
        <div className='app-overall'>
            <Navbar />
            <Main />
            <MovieExtras />
        </div>
    </MovieProvider>
  )
}

export default App