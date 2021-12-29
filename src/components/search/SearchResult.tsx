import { observer } from 'mobx-react'
import React from 'react'
import useSearchTV from '../../hooks/useSearchTV'
import useSearchMovie from '../../hooks/useSearchMovie'
import store from '../../context/store'
import Card from '../Card'

const SearchResult = observer(() => {
  const searchTV = useSearchTV()
  const searchMovie = useSearchMovie()

  return (
    <ul className="card-container">
      {
      (store.isQuery && store.activeTab === 'tv' && searchTV.isSuccess && typeof (searchTV.data) !== 'string') 
         && searchTV.data.results.map(
        (e: any) => 
        <Card 
        key={e.id} id={e.id} 
        name={e.name} description={e.overview} 
        poster={e.poster_path} />)}
      {(store.isQuery && store.activeTab === 'movie' && searchMovie.isSuccess && typeof (searchMovie.data) !== 'string') && searchMovie.data.results.map(
        (e: any) => <Card key={e.id} id={e.id} name={e.title} description={e.overview} poster={e.poster_path} backdrop={e.backdrop_path}/>)}
    </ul>
  )
})
export default SearchResult