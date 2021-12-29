import { observer } from 'mobx-react'
import React from 'react'
import store from '../context/store'


const Tabs = observer(() => {
  return (
    <div className="tabs">
      <button onClick={() => {
        store.setNewTab('movie')
        store.changeQueryString(store.searchURL)
      }}
        className={store.activeTab === 'movie' ? 'active' : ''}>Movies</button>
      <button onClick={() => {
        store.setNewTab('tv')
        store.changeQueryString(store.searchURL)
      }}
        className={store.activeTab === 'tv' ? 'active' : ''}>TV Shows</button>
    </div>
  )
})

export default Tabs