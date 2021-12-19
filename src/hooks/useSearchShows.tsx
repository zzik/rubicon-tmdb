import axios from "axios"
import { useQuery } from "react-query"
import store from "../context/store" // mobx store

const searchTopShows = () => {
  const queryLink = `https://api.themoviedb.org/3/search/tv?api_key=${store.apiKey}&language=en-US&page=1$&query=${store.queryString}&include_adult=false`
  const queryString = axios.get(queryLink).then(response => response.data)
  return queryString
}

export default function useSearchShows() {
  return useQuery('searchShows', searchTopShows)
}