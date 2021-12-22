import axios from "axios"
import { useQuery } from "react-query"
// import store from "../context/store" // mobx store

const topShowsLink = 'https://api.themoviedb.org/3/tv/top_rated?api_key=516bd90eaa5d6fc72dd79e7ba1bfaa28&language=en-US'

const fetchTopShows = async () => {
  const res = await axios.get(topShowsLink)
  return res.data
}

const useTopShows = () => useQuery('topShows', fetchTopShows)

export default useTopShows