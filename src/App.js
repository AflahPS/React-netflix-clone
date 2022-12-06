import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css";
import url from "./ext-links";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={url.trending} title="Originals" />
      <RowPost url={url.ActionMovies} title="Action" isSmall />
      <RowPost url={url.ComedyMovies} title="Comedy" isSmall />
      <RowPost url={url.HorrorMovies} title="Horror" isSmall />
      <RowPost url={url.Documentaries} title="Documentaries" isSmall />
      <RowPost url={url.RomanceMovies} title="Romance" isSmall />
    </div>
  );
}

export default App;
