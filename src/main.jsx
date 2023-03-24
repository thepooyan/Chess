import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from '../components/Board'
import setUpBoard from '../modules/setUpBoard'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
)
setUpBoard(Board);