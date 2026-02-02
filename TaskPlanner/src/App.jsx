// import { useState } from 'react'
import TaskCard from './components/TaskCard.jsx'
import TopBar from './components/TopBar.jsx'
import Board from './components/Board.jsx'
import './css/App.css'

function App() {

  return (
    // <h1>Hello, Task aaasas asasasasas!</h1>
    <div className="app-container">
      <TopBar />
      <Board/>
    </div>
    
  )
}

export default App
