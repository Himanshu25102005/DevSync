import React from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css';
import './index.css'
import { ThemeProvider } from './contexts/themeContext';
import Dashboard from './components/Dashboard';
import { SmoothCursor } from './components/ui/smooth-cursor';


const App = () => {
  return (
    <>
    <SmoothCursor />
      <ThemeProvider>
        <Navbar />
        <Dashboard/>
      </ThemeProvider>
    </>
  )
}

export default App 