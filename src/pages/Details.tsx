import React, { ReactElement } from 'react'
import { Tabs, SearchBox, TopTen } from '../components'

function Homepage(): ReactElement {


  return (
    <div>
      <Tabs />
      <SearchBox />
      <TopTen />
    </div>
  )
}

export default Homepage
