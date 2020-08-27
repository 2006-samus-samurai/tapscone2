import React from "react";
import TrelloJobBoard from "./components/TrelloJobBoard";

function App() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <TrelloJobBoard />
        </div>
      </div>
    </div>
  );
}

export default App;
