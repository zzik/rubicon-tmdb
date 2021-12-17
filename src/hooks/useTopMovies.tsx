import axios from "axios"
import { useQuery } from "react-query"

const topMoviesLink = 'https://api.themoviedb.org/3/movie/top_rated?api_key=516bd90eaa5d6fc72dd79e7ba1bfaa28&language=en-US'

const fetchTopMovies = () => axios.get(topMoviesLink).then(response => response.data)

export default function useTopMovies() {
  return useQuery('topMovies', fetchTopMovies)
}