
import { Route, Routes } from 'react-router-dom'
import { DownloadMovie, Home, MovieDetails, PageNotFound, Search } from '../pages'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="" element={<Home pathToApi="movie/now_playing?" title="Home"/>}/>
            <Route path="movies/upcoming" element={<Home pathToApi="movie/upcoming?" title="Upcoming"/>}/>
            <Route path="movies/top" element={<Home pathToApi="movie/top_rated?" title="Top Rated"/>}/>
            <Route path="movies/popular" element={<Home pathToApi="movie/popular?" title="Popular"/>}/>
            <Route path="movie/:id" element={<MovieDetails/>}/>
            <Route path="search/" element={<Search pathToApi={"search/movie?query="}/>}/>
            <Route path="download\:id" element={<DownloadMovie/>}/>
            <Route path="*" element={<PageNotFound title="Page Not Found"/>}/>
        </Routes>
    </>
  )
}

export default AllRoutes
