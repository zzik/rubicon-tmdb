import { observer } from 'mobx-react'
import React from 'react'
import useSearchShows from '../hooks/useSearchShows'


const QueryShows = observer(() => {

  const searchShows = useSearchShows()
  console.log(searchShows);

  return (
    <ul>
      {searchShows.isLoading && <li>Loading search...</li>}
      {searchShows.isSuccess ? <li>{searchShows.data.results[0].original_name}</li> : <h3>Show not found..</h3>}
    </ul>
  )
})
export default QueryShows 