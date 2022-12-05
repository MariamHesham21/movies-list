/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ({ GetPage,pageCount }) => {

    const handlePageClick=(data)=>{
        console.log(data.selected +1)
        GetPage(data.selected +1)
    }

  return (
    <div className='All-Pagination'>
        <ReactPaginate
        breakLabel="..."
        nextLabel="nex >"
        onPageChange={handlePageClick}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< pre"
        renderOnZeroPageCount={null}
        className='pagination'
      />
    </div>
  )
}

export default Pagination