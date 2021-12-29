import axios from 'axios'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams, useNavigate } from 'react-router-dom'
import store from '../context/store'


const Show = observer(() => {
  // This is a bandaid because I havent figured out how to return dynamic props from hooks, yikes
  const params = useParams()
  const navigate = useNavigate()

  const fetchMovie = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/tv/${params.id}?api_key=${store.apiKey}&language=en-US`)
    return res.data
  }
  
  const useDetails = () => useQuery('fetchMovie', fetchMovie)
  const data = useDetails()
  const details = data.data
  // end of bandaid

  return (
    <div className="details-container">
      <button className="back" onClick={() => navigate(-1)}>&lt; Back </button>
      {data.isSuccess && (
      <div className="details">
        <img src={store.baseLink+details.poster_path} alt={details.tagline} width="300"/>
        <h1>{details.name}</h1>
        <p><h3 className="subheading">Movie Overview:</h3> <br/>{details.overview}</p>
      </div>
      ) }
    </div>
  )
})

export default Show
