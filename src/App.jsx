import React, { useState } from 'react';

import './App.css';
import Fire from './assets/fire.png'
import Star from './assets/glowing-star.png'
import Party from './assets/partying-face.png'


import Navbar from './components/Navbar/Navbar';
import MovieList from './components/MovieList/MovieList';

const App = () => {
  const[searchResult,setSearchResult]=useState([]);
  const handleSearch=async(query)=>{
    const response=await fetch(`https://api.themoviedb.org/3/movie?api_key=1dd6751dc1c919f8130ce6f1e560e4c3&query=${query}`);
    const data=await response.json();
    setSearchResult(data.results||[]);
  };
  return (
    <div className='=app'>
      <Navbar onSearch={handleSearch}/>
      {searchResult.length>0&&(
        <MovieList movies={searchResult} title="Search Results"/>
      )}
      <MovieList type="popular" title="Popular" emoji={Fire}/>
      <MovieList type="top_rated" title="Top Rated" emoji={Star}/>
      <MovieList type="upcoming" title="Upcoming" emoji={Party}/>

     
    </div>
  );
};

export default App
