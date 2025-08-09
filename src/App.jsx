import React from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css';
import './index.css'
import { ThemeProvider } from './contexts/themeContext';
import Dashboard from './Pages/Dashboard';
import { SmoothCursor } from './components/ui/smooth-cursor';
import DotGrid from './components/ui/Dotgrid';





const App = () => {
  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh', position: 'relative' }}>
        {/* DotGrid as background */}
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
          <DotGrid
            dotSize={4}
            gap={20}
            baseColor="#cbd5e1"
            activeColor="#94a3b8"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        
        <SmoothCursor />
        <ThemeProvider>
          <Navbar />
          <Dashboard />
        </ThemeProvider>
      </div>

    </>
  )
}

export default App 