import { observer } from 'mobx-react'
import React, { ReactElement } from 'react'
import { Display } from '../components'

const Homepage = observer((): ReactElement => {
  return (
    <div className="page">
      <Display />
    </div>
  )
})

export default Homepage