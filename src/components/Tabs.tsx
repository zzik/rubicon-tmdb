import React, { ReactElement } from 'react'
import store from '../context/store'

export default function Tabs(): ReactElement {

  return (
    <div className="tabs">
      <button onClick={() => {store.setNewTab('movie')}}>Movies</button>
      <button onClick={() => {store.setNewTab('tv')}}>TV Shows</button>
    </div>
  )
}
