import { observer } from 'mobx-react'
import React from 'react'
import useSearch from '../hooks/useSearch'
import Card from './Card'

const SearchResult = observer(() => {
  const search = useSearch()
  console.log({ ...search });


  return (
    <ul>
      {search.isSuccess && typeof (search.data) !== 'string' ? search.data.results.map((e: any) => <Card key={e.id} id={e.id} name={e.title} description={e.overview} poster={e.poster_path} />) : <p>Please wait..</p>}
    </ul>
  )
})
export default SearchResult