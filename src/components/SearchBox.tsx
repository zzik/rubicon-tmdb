import React, { ReactElement } from "react";
import store from "../context/store";
import { observer } from 'mobx-react'

const SearchBox = observer((): ReactElement => {
  const handleSearch = (event: any) => {
    setTimeout(() => {
      console.log(event.target.value)
      store.changeQueryString(event.target.value)
    }, 1000);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
})

export default SearchBox;