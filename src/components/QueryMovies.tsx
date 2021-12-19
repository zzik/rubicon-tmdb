import { observer } from 'mobx-react'
import React from 'react'
import useSearchMovies from '../hooks/useSearchMovies'


const QueryMovies = observer(() => {

  const searchMovies = useSearchMovies()
  console.log(searchMovies);

  return (
    <ul>
      {searchMovies.isLoading && <li>Loading search...</li>}
      {searchMovies.isSuccess ? <li>{searchMovies.data.results[0].title}</li> : <h3>Show not found..</h3>}
    </ul>
  )
})
export default QueryMovies