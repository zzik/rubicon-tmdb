import React, { ReactElement } from 'react'
import store from '../context/store'

function SearchBox(): ReactElement {

  const handleSearch = (event: any) => {
    if (event.target.value.length > 3) {
      // store.activateQueryStatus()
      setTimeout(() => {
        store.changeQueryString(event.target.value)
      }, 1000)
    };
    clearTimeout();
  };

  return (
    <div>
      <input type="text" placeholder="Search.." onChange={handleSearch} />
    </div>
  )
}

export default SearchBox
