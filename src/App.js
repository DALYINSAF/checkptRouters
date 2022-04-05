import { useState } from "react";
import "./App.css";
import AddMovie from "./Components/AddMovie";
import MovieList from "./Components/MovieList";
import "bootstrap/dist/css/bootstrap.min.css";

import { movies } from "./Data";
import Navigation from "./Components/Navigation";
import SearchMovie from "./Components/SearchMovie";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  const [films, setFilms] = useState(movies);
  const handeladd = (newmovie) => {
    setFilms([...films, newmovie]);
  };
  const [search, setSearch] = useState("");
  const handelserch = (searchedmovie) => {
    setSearch(searchedmovie);
  };
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  return (<Router>
    <div className="App">
      
        <Navigation />
        <SearchMovie
          searchp={search}
          handelserchp={handelserch}
          searchrate={rating}
          handelserchrate={handleRating}
        />
       <Routes>
       <Route exact path="/detail/:id" element={<Details movies={films} />} />
        <Route
         exact
          path="/"
          element={
            <MovieList
              movies={films.filter(
                (film) =>
                  film.title.toLowerCase().includes(search.toLowerCase()) &&
                  film.rate >= rating
              )}
            />
          }
        />
         </Routes>
        <AddMovie handeladd={handeladd} />
    </div> </Router>
  );
}

export default App;
