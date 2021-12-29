import axios from "axios"
import { useQuery } from "react-query"
import store from "../context/store" // mobx store


const searchRequest = async () => {
    const res = await axios.get(store.searchURL)
    return res.data
}

const useSearch = () => useQuery('searchMovies', searchRequest, {refetchInterval:2000}) 

export default useSearch