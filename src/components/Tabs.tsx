import React, { ReactElement } from 'react'

interface Props {
  
}

export default function Tabs({}: Props): ReactElement {
  return (
    <div>
      <a className="movies-tab">Movies</a>
      <a className="tvshows-tab">TV Shows</a>
    </div>
  )
}
