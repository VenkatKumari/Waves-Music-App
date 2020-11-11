import React, { useState } from "react";
//import Styles
import "./styles/app.scss";

//Adding Components
import Song from "./components/Song";
import Player from "./components/Player";
//Import util
import data from "./util";

function App() {
  //state

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[4]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
