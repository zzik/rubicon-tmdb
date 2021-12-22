import { observer } from 'mobx-react'
import React from 'react'
import useTopShows from '../hooks/useTopShows'
import Card from './Card'

const TopTenShows = observer(() => {

  const shows = useTopShows()
  // console.log(shows);

  return (
    <ul>
      {shows.isSuccess && shows.data.results.slice(0, 10).map((e: any) => <Card key={e.id} id={e.id} name={e.name} description={e.overview} poster={e.poster_path} />)}
    </ul>
  )
})
export default TopTenShows