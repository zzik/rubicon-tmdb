import { observer } from 'mobx-react'
import React from 'react'
import store from '../context/store'
import {SearchContainer, TopTen, Tabs} from './index'

const Display = observer(() => {
  return (
    <div className="top-results-container">
      <Tabs />
      {<SearchContainer />}
      {!store.isQuery && <TopTen />}
    </div>
  )
})
export default Display