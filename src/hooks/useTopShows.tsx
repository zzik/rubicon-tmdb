import axios from "axios"
import { useQuery } from "react-query"

const topShowsLink = 'https://api.themoviedb.org/3/tv/top_rated?api_key=516bd90eaa5d6fc72dd79e7ba1bfaa28&language=en-US'

const fetchTopShows = () => axios.get(topShowsLink).then(response => response.data)

export default function useTopShows() {
  return useQuery('topShows', fetchTopShows)
}