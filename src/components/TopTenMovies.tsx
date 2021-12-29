import { observer } from 'mobx-react'
import React from 'react'
import useTopMovies from '../hooks/useTopMovies'
import { MovieProps } from '../interfaces'
import Card from './Card'

const TopTenMovies = observer(() => {
  const movies = useTopMovies()
  return (
    <ul className="card-container">
      {movies.isSuccess && movies.data.results.slice(0, 10).map(
        (e: MovieProps) => 
        <Card 
        key={e.id} 
        id={e.id} 
        name={e.title} 
        description={e.overview} 
        poster={e.poster_path} />)}
    </ul>
  )
})
export default TopTenMovies