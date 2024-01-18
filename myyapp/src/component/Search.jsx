import React from 'react'

function Search(props) {

    let {setSearch} = props
  return (
    <>
      <div>
        <h2>Search Anything here...</h2>
        <input type="text"  placeholder='Enter....' onChange={(e) => {setSearch(e.target.value)}} />
      </div>
    </>
  )
}

export default Search