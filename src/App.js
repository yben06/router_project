import './App.css';
import React, {useState} from "react";
import {moviesData} from './MoviesData';
import Main from "./Components/Main/Main";
import Header from "./Components/Main/Header/Header";
import { Routes, Route } from "react-router-dom";
import Description from './Description';

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchName,setSearchName] = useState("");
  const [searchRate,setSearchRate] = useState(0);
  const AddNewMovie=(x)=>{
    setMovies([...movies,x]);
  };
  
  return (
    <div className="App">
      <Routes>
      
      <Route exact path="/" element={
        <>
      <Header 
      setSearchName={setSearchName}
      setSearchRate={setSearchRate}
      searchRate={searchRate}

      />
      <Main  movies={
          (searchName || searchRate)
            ? movies.filter(
                (el) =>
                  el.name
                    .toLowerCase()
                    .includes(searchName.toLowerCase().trim()) &&
                  el.rating >= searchRate
              )
            : movies
        }
      
      
      
      AddNewMovie={AddNewMovie}
      
      
      />
      </>
      }
      >
      </Route>
      

   <Route path="/movies/:name" element= {<Description movies={movies}/>}/>
   </Routes>
    </div>
  );
}

export default App;