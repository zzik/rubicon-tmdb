import { observer } from 'mobx-react'
import React from 'react'
import store from '../context/store'
import TopTenMovies from './TopTenMovies'
import TopTenShows from './TopTenShows'

const TopTen=observer(()=> {
  return (
    <div>
      {store.activeTab === 'tv' && <TopTenShows />}
      {store.activeTab === 'movie' && <TopTenMovies />}
    </div>
  )
})

export default TopTen
