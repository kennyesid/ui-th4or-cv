import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BackgroundFound from './pages/backgroundFound/BackgroundFound.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BackgroundFound />
    <App />
  </React.StrictMode>,
)
