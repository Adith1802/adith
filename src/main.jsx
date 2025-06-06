import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './pages/homepage'
import Aboutpage from './pages/Aboutpage'
import Kontak from './pages/kontak'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<Aboutpage />} />
        <Route path='/Kontak' element={<Kontak />} />
    </Routes>
    </BrowserRouter>
  
  </StrictMode>,
)
