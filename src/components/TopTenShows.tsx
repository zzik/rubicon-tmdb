import { observer } from 'mobx-react'
import React from 'react'
import useTopShows from '../hooks/useTopShows'


const TopTenShows = observer(() => {

  const shows = useTopShows()

  return (
    <ul>
      {shows.isSuccess && <li>{shows.data.results[0].original_name}</li>}
      {shows.isSuccess && <li>{shows.data.results[1].original_name}</li>}
      {shows.isSuccess && <li>{shows.data.results[2].original_name}</li>}
    </ul>
  )
})
export default TopTenShows