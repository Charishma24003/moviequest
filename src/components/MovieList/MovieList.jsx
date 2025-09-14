import React, { useCallback, useEffect, useState } from "react";
import _ from "lodash";

import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({ type, title, emoji, movies: propMovies }) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  const fetchMovies = useCallback(async () => {
    if (!type) return;
    // let allMovies=[];
    //  for(let page=1;page<=5;page++){
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=1dd6751dc1c919f8130ce6f1e560e4c3&page=1`
    );
    const data = await response.json();
    //     allMovies=[...allMovies,...data.results];
    //  }
    setMovies(data.results || []);
    setFilterMovies(data.results || []);
  }, [type]);

  useEffect(() => {
    if (propMovies) {
      setMovies(propMovies);
      setFilterMovies(propMovies);
    }
  }, [propMovies]);

  useEffect(() => {
    if (type) {
      fetchMovies();
    }
  }, [fetchMovies, type]);

  //   useEffect(() => {
  //     if(sort.by!=="default"{
  //         const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
  //         setFilterMovies(sortedMovies);
  //     }
  //   },[sort,filterMovies]);
  //     setMinRating(4);
  //   }, []);

  useEffect(() => {
    if (sort.by !== "default") {
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
  }, [sort, filterMovies]);

  const handleFilter = (rate) => {
    if (rate == minRating) {
      setMinRating(0);
      setFilterMovies(movies);
    } else {
      setMinRating(rate);
      const filtered = movies.filter((movie) => movie.vote_average >= rate);
      setFilterMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
    // console.log(sort);
  };

  return (
    <section className="movie_list" id={type || "search"}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title}{" "}
          {emoji && (
            <img src={emoji} alt={`${emoji} icon`} className="navbar_emoji" />
          )}
        </h2>

        <div className="align_center movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          <select
            name="by"
            id=""
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id=""
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
