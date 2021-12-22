import { observer } from 'mobx-react'
import React from 'react'
import useTopMovies from '../hooks/useTopMovies'
import Card from './Card'

const TopTenMovies = observer(() => {

  const movies = useTopMovies()
  // console.log(movies);
  
  return (
      <ul>
        {movies.isSuccess && movies.data.results.slice(0, 10).map((e: any) => <Card key={e.id} id={e.id} name={e.title} description={e.overview} poster={e.poster_path} />)}
      </ul>
  )
})
export default TopTenMovies