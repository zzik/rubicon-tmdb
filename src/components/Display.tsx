import { observer } from 'mobx-react'
import React from 'react'
import store from '../context/store'
import TopTenShows from './TopTenShows'
import TopTenMovies from './TopTenMovies'
import QueryShows from './QueryShows'

const Display = observer(() => {
  return (
      <div className={store.activeTab}>
        {store.activeTab === 'tv' && <TopTenShows />}
        {store.activeTab === 'movie' && <TopTenMovies />}
        {store.queryString.length > 3 && <QueryShows />}
      </div>
  )
})
export default Display