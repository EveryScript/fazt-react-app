import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css';
import { TaskContextProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
  // <React.StrictMode>
  //   <TaskContextProvider>
  //     <App />
  //   </TaskContextProvider>
  // </React.StrictMode>
)
