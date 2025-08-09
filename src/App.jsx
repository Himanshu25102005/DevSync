import React from 'react'
import Navbar from './components/Navbar'
import 'remixicon/fonts/remixicon.css';
import './index.css'
import { ThemeProvider } from './contexts/themeContext';
import Dashboard from './Pages/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SmoothCursor } from './components/ui/smooth-cursor';
import DotGrid from './components/ui/Dotgrid';
import Footer from './components/Footer';
import SignUp from './Pages/SignUp';





const App = () => {
  return (
    <Router>
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


          <Routes>
            {/* Public Routes */}
            <Route
              path='/'
              element={<Dashboard />}
            />

            <Route
              path='/register'
              element={<SignUp />}
            />

          </Routes>

          <Footer />
        </ThemeProvider>
      </div>

    </Router>
  )
}

export default App 