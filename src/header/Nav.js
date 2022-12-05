import React from 'react'

const Nav = ({Search}) => {
  const onSearch= (word)=>{
    Search(word)
    
  }
  return (
    <div className='Nav'>
        <h3> MovieList </h3>
        <div className='Search'>
        <input type='search' placeholder='Search...' onChange={(e)=>onSearch(e.target.value)}  />
        <button className='Search-btn'> Search</button>
        </div>
    </div>
  )
}

export default Nav