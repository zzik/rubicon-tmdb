import axios from "axios"
import { useQuery } from "react-query"
import store from "../context/store" // mobx store


const searchMovies = () => {
  const queryLink = `https://api.themoviedb.org/3/search/movie?api_key=516bd90eaa5d6fc72dd79e7ba1bfaa28&language=en-US&page=1$&query=${store.queryString}&include_adult=false`
  const queryString = axios.get(queryLink).then(response => response.data)
  return queryString
}

export default function useSearchMovies() {
  return useQuery('searchShows', searchMovies)
}