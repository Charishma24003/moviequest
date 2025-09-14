import React, { useState } from 'react';

import './App.css';
import Fire from './assets/fire.png'
import Star from './assets/glowing-star.png'
import Party from './assets/partying-face.png'


import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';

const App = () => {
  const[searchResult,setSearchResult]=useState([]);
  const[query,setQuery]=useState("");
  const[page,setPage]=useState(1);
  const[totalPages,setTotalPages]=useState(1);

  const handleSearch=async(newQuery)=>{
    setQuery(newQuery);
    setPage(1);
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1dd6751dc1c919f8130ce6f1e560e4c3&query=${newQuery}&page=1`);
    const data=await response.json();
    setSearchResult(data.results||[]);
    setTotalPages(data.total_pages||1);
  };

  const loadMore=async()=>{
      const nextPage=page+1;
      if(nextPage>totalPages)return;

       const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1dd6751dc1c919f8130ce6f1e560e4c3&query=${query}&page=${nextPage}`);

       const data=await response.json();

       setSearchResult((prev)=>[...prev,...App(data.results||[])]);
       setPage(nextPage);

  };
  return (
    <div className='app'>
      <Navbar onSearch={handleSearch}/>
      {
        searchResult.length>0 && (
          <>
            <MovieList movies={searchResult} title="Search Results"/>
            {
              page < totalPages && (
                <button className='load-more' onClick={loadMore}>Load More</button>
              )
            }
         </>
      )}
      <MovieList type="popular" title="Popular" emoji={Fire}/>
      <MovieList type="top_rated" title="Top Rated" emoji={Star}/>
      <MovieList type="upcoming" title="Upcoming" emoji={Party}/>

     
    </div>
  );
};

export default App
