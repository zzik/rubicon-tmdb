import { observer } from 'mobx-react'
import React from 'react'
import useTopMovies from '../hooks/useTopMovies'


const TopTenMovies = observer(() => {

  const movies = useTopMovies()
  console.log(movies)
  
  return (

      <ul>
        {movies.isFetched && <li>{movies.data.results[0].title}</li>}
        {movies.isFetched && <li>{movies.data.results[1].title}</li>}
        {movies.isFetched && <li>{movies.data.results[2].title}</li>}
        {movies.isFetched && <li>{movies.data.results[3].title}</li>}
      </ul>

  )
})
export default TopTenMovies