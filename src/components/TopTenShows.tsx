import { observer } from 'mobx-react'
import React from 'react'
import useTopShows from '../hooks/useTopShows'
import { TVProps } from '../interfaces'
import Card from './Card'

const TopTenShows = observer(() => {

  const shows = useTopShows()

  return (
    <ul className="card-container">
      {shows.isSuccess && shows.data.results.slice(0, 10).map(
        (e: TVProps) => 
        <Card 
        key={e.id} 
        id={e.id} 
        name={e.name} 
        description={e.overview} 
        poster={e.poster_path} />)}
    </ul>
  )
})
export default TopTenShows