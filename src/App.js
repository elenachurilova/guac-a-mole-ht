import React from "react";
import Canvas from "./components/Canvas"
import Chip from "./components/Chip"
import ScoreBoard from "./components/ScoreBoard"


export const score = 0
 export const ScoreContext = React.createContext(score)



function App() {
  
  return (
    <div>
      <ScoreContext.Provider value={score}>
        <Canvas />
        <ScoreBoard />
      </ScoreContext.Provider>
        <Chip />
  
    </div>
  )

}

export default App

