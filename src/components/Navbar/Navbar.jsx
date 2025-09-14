import React,{useState} from 'react'

import './Navbar.css'

import Fire from '../../assets/fire.png';
import Star from '../../assets/star.png';
import GStar from '../../assets/glowing-star.png';
import Party from '../../assets/partying-face.png';


const Navbar = ({onSearch}) => {
  const[searchQuery,setSearchQuery]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchQuery.trim()){
      onSearch(searchQuery);
    }
  };
  return (<nav className='navbar'>
<h1 style={{ cursor: "pointer" }} onClick={() => window.location.reload()}>
  MovieQuest
</h1>

    <form className='navbar_search' onSubmit={handleSubmit}>
      <input type="text" placeholder='Search movies...' value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} />

      <button type="submit" className='search_btn'>Search</button>

    </form>

    <div className="navbar_links">
      
        <a href="#popular">Popular</a>
        <a href="#top_rated">Top Rated</a>
        <a href="#upcoming">Upcoming</a>

    </div>
  </nav>
  );
}

export default Navbar
