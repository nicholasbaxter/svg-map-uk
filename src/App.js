import React from "react";
import MapSVG from "./data/MapSVG";
import GithubCorner from "react-github-corner";

function App() {
  return (
    <div className="App">
      <div>
        <p
          style={{
            color: "white",
            fontFamily: "Major Mono Display",
            position: "absolute",
            left: "1rem",
            top: "1rem"
          }}
        >
          SVG Map of the UK, built in React
        </p>
        <GithubCorner href="https://github.com/eyecandycode/repo" />
      </div>
      <MapSVG />
    </div>
  );
}

export default App;
