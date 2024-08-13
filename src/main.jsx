import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div className="fixed bottom-10 right-40">
      <button className="btn">ติดต่อเรา</button>
    </div>
    <App />
    <Footer />
  </StrictMode>,
)
