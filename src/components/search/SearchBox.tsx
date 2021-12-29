import React from "react";
import store from "../../context/store";
import { observer } from 'mobx-react'
import { action } from "mobx";

const SearchBox = observer((): any => {
  const handleSearch = (event: any) => {
    clearTimeout()
    if (event.target.value.length > 2) {
      setTimeout(() => {
        store.changeQueryString(event.target.value)
        store.activateQuery()
      }, 1000);
    }
    else store.deactivateQuery()
  }

  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search.."
        onChange={action((e) => handleSearch(e))}
      />
    </div>
  );
})

export default SearchBox;