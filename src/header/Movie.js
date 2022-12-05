import React from 'react'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'


const Movie = ({Movies , GetPage,pageCount}) => {
  return (
  <div>
    <div className='Movie-Card'>
      { Movies.length ? (Movies.map((mov)=>{
        return(
          <div className='Movie-img' key={mov.id}>
            <img src={'https://image.tmdb.org/t/p/w500/'+ mov.poster_path} alt='movie'/>
            <div className='movie-text' >
              <p><span>Name:</span>{mov.original_title}</p>
              <p><span>Published: </span>{mov.release_date}</p>
              <p><span>Evaluation: </span>{mov.vote_average}</p>
              <div className='disply-more'>
              <a  href={`/Movie/${mov.id}`}>View More..</a>
              </div>
            </div>
          </div> 
        )
      })
      ):<h3> there aren't movies</h3>}
    </div>
    <Pagination GetPage={GetPage} pageCount={pageCount}/>
    </div>
  )
}

export default Movie