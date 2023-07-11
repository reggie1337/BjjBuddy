import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div
        className="backgroundPhoto"
        style={{
          backgroundImage: "url(/images/backgroundImage.jpeg)",
          // backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
          // opacity: 0.9,
        }}
      >
        <BrowserRouter>
          <div className="Front-page">
            <h1 className="title">Jiujitsu-Buddy</h1>
            <Link to={"/home"}>
              <button className="enter" type="button">
                JOURNAL
              </button>
            </Link>
            <Link to={"https://smoothcomp.com"}>
              <button className="site">COMPETE</button>
            </Link>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
