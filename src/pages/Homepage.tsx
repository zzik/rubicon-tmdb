import React, { ReactElement } from 'react'
import { Tabs, SearchBox, Display } from '../components'

const Homepage = (): ReactElement => {


  return (
    <div>
      <Tabs />
      <SearchBox />
      <Display />
    </div>
  )
}

export default Homepage
