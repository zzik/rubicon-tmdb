import axios from "axios"
import { useQuery } from "react-query"
import store from "../context/store"


const searchTopShows = () => {
  const queryLink = `https://api.themoviedb.org/3/search/${store.activeTab}?api_key=516bd90eaa5d6fc72dd79e7ba1bfaa28&language=en-US&page=1$&query=${store.queryString}&include_adult=false`
  const queryString = axios.get(queryLink).then(response => response.data)
  return queryString
}

export default function useSearchShows() {
  return useQuery('searchShows', searchTopShows)
}