import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Navbar from './components/Navbar.jsx'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Services from './components/Services.jsx'
// import Bronze from './components/Bronze.jsx'
// import Silver from './components/Silver.jsx'
// import Gold from './components/Gold.jsx'
// import Dimond from './components/Diamond.jsx'
// import Vochers from './components/Vouchers.jsx'
import Master from './components/Master.jsx'
import { BrowserRouter } from 'react-router-dom'
import Question from './components/Question.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  // <StrictMode>
  //   <GoogleForm/>
  // </StrictMode>
)
