import axios from "axios"
import { useQuery } from "react-query"
import store from "../context/store" // mobx store


const searchRequest = async () => {
    const res = await axios.get(store.searchURL)
    return res.data
}

const useSearch = () => useQuery('searchShows', searchRequest, {refetchInterval:1000}) 

export default useSearch