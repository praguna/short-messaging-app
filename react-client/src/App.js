import React from 'react';
import './App.css';
import Home from "./Home/home";
import UserPanel from "./Configuration/userPanel";
import SearchPanel from "./Updates/searchPanel";

function App() {
  return (
    <div className="App">
      <UserPanel/>
      <Home/>
      <SearchPanel/>
    </div>
  );
}

export default App;
