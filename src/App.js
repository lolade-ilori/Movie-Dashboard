import React from 'react'
import MovieExtras from './components/extras/MovieExtras'
import Navbar from './components/navbar/Navbar'
import Main from './pages/main/Main'

function App() {
  return (
    <div className='app-overall'>
        <Navbar />
        <Main />
        <MovieExtras />
    </div>
  )
}

export default App