import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <div className="dropdown dropdown-top fixed bottom-10 right-40">
      <div tabIndex={0} role="button" className="btn m-1">ติดต่อเรา</div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
      </ul>
    </div>
    <App />
    <Footer />
  </StrictMode>,
)
