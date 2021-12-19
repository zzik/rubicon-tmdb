import { observer } from 'mobx-react'
import React from 'react'
import store from '../context/store'
import TopTenShows from './TopTenShows'
import TopTenMovies from './TopTenMovies'
import QueryShows from './QueryShows'
import QueryMovies from './QueryMovies'

const Display = observer(() => {

let query;

  if (store.queryString.length > 3 && store.activeTab === 'movie') {
    query = <QueryMovies />
  }
  else if (store.queryString.length > 3 && store.activeTab === 'tv') {
    query = <QueryShows />
  }

  return (
    <div className={store.activeTab}>
      {store.activeTab === 'tv' && <TopTenShows />}
      {store.activeTab === 'movie' && <TopTenMovies />}
      {query}
    </div>
  )

})
export default Display