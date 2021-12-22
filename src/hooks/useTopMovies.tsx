import axios from "axios"
import { useQuery } from "react-query"
// import store from "../context/store"

const topMoviesLink = 'https://api.themoviedb.org/3/movie/top_rated?api_key=516bd90eaa5d6fc72dd79e7ba1bfaa28&language=en-US'

const fetchTopMovies = async () => {
  const res = await axios.get(topMoviesLink)
  return res.data
}

const useTopMovies = () => useQuery('topMovies', fetchTopMovies)

export default useTopMovies