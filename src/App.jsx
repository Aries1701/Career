import React from 'react'
import AppRouter from './router/AppRouter';
import Navbarheader from './component/Navbar/Navbarheader';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbarheader/>
     <AppRouter/>
    </div>
  )
}

export default App