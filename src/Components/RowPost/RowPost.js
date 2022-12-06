import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import { TMDB_IMG_URL, API_KEY } from "../../constants";
import axios from "../../axios";
function RowPost({ title, isSmall, url }) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.error(err));
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleViewTrailer = (id) => {
    axios
      .get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(
        (res) => res.data.results.length && setUrlId(res.data.results[0].key)
      )
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((mov) => (
          <div className="poster-card">
            <img
              className={isSmall ? "smallPoster" : "poster"}
              alt="poster"
              onClick={() => handleViewTrailer(mov.id)}
              src={`${TMDB_IMG_URL}${mov.backdrop_path}`}
            />
            <h4 className="movie-title">{mov.title}</h4>
          </div>
        ))}
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId} />}
    </div>
  );
}

export default RowPost;
