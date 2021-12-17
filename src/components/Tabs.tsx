import React, { ReactElement } from 'react'
import store from '../context/store'

export default function Tabs(): ReactElement {

  return (
    <div>
      <button onClick={() => {store.setNewTab('movies')}}>Movies</button>
      <button onClick={() => {store.setNewTab('shows')}}>TV Shows</button>
    </div>
  )
}
