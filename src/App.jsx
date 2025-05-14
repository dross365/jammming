import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./css/App.css";
import PlaylistContainer from "./containers/PlaylistContainer";
import SearchBarContainer from "./containers/SearchBarContainer";
import SearchResultsContainer from "./containers/SearchResultsContainer";
import TrackContainer from "./containers/TrackContainer";
import TracklistContainer from "./containers/TracklistContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchBarContainer />
      <TrackContainer />
      <TracklistContainer />
    </>
  );
}

export default App;
