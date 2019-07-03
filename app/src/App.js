import React from 'react';
import './App.css';

import Dice from "./comp/Dice"
import Sheet from "./comp/Sheet"

function App() {
  return(
    <>
    <div className="center">
      <Dice/>
      <Sheet/>
    </div>
    </>
  )
}

export default App;
