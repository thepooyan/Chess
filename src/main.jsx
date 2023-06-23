import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Modal from '../components/Modal'
import Notif from '../components/Notif'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Modal/>
    <Notif/>
  </React.StrictMode>,
)