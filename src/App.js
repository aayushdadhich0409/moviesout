// import logo from "./logo.svg";
import "./App.css";
import {useState, useEffect } from "react";
// import './App.css'
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// d7e0f905
const API_URL = "http://omdbapi.com?apikey=d7e0f905";

// const movie1 = {
//   Title: "Superman, Spiderman or Batman",
//   Year: "2011",
//   imdbID: "tt2084949",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
// };

const App = () => {

  const [movies,setmovies] = useState([]);
  const [searchterm,setsearchterm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data);
    // console.log(data.totalResults);
    console.log(data.Search);
    setmovies(data.Search);
    // console.log(movies?.length>0);
  };
  useEffect(() => {
    searchMovies("bat");
    console.log("called");
  },[]);

  
  

  const searchkey = ()=>{

    searchMovies(searchterm);
  }

  return (
    <div className="app">
      <h1> MovieLand </h1>
      <div className="search">
        <input
          placeholder="search for movies"
          value={searchterm}
          // type="submit"
          onChange={(e) => setsearchterm(e.target.value)}
        />
        
        <img src={SearchIcon} alt="Search" onClick={searchkey} />
      </div>
      {
        
      }

    {
      movies?.length >0
        ?(
          <div className="container">
            {
              movies.map((movie)=>(
                <MovieCard movie = {movie}/>
              ))
            }
      </div>
        ):(
          <div className="empty"><h2>No Movies Found</h2></div>
          // console.log(movies[0])
        )
    }

      {/* <div className="container">
        <MovieCard movie={movie1} />
      </div> */}
    </div>
  );
};

export default App;
