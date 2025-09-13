import React from 'react'

const FilterGroup = () => {
  return (
    <ul className="align_center movie_filter">
                    <li className={
                        minRating===8
                        ?'movie_filter_item active'
                        :'movie_filter_item'
                        } 
                        onClick={()=>handleFilter(8)}>8+ Star</li>
                    <li className={
                        minRating===7
                        ?'movie_filter_item active'
                        :'movie_filter_item'
                        } 
                        onClick={()=>handleFilter(7)}>7+ Star</li>
                    <li className={
                        minRating===6
                        ?'movie_filter_item active'
                        :'movie_filter_item'
                        } 
                        onClick={()=>handleFilter(6)}>6+ Star</li>
                </ul>  
  )
}

export default FilterGroup