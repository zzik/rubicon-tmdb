import { observer } from 'mobx-react'
import React from 'react'
import store from '../context/store'
import TopTenShows from './TopTenShows'
import TopTenMovies from './TopTenMovies'
import SearchResult from './SearchResult'

const Display = observer(() => {
  return (
    <div>
      <h2>{store.searchURL}</h2>
      {<SearchResult/>}
      {store.activeTab === 'tv' && <TopTenShows />}
      {store.activeTab === 'movie' && <TopTenMovies />}
    </div>
  )

})
export default Display