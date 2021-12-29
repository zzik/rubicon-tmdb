import { observer } from 'mobx-react'
import React from 'react'
import SearchResult from './SearchResult'
import SearchBox from './SearchBox'

const SearchContainer = observer(() => {
  return (
    <>
      <SearchBox/>
      <SearchResult/>
    </>
  )
})
export default SearchContainer