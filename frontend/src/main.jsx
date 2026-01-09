import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, UNSAFE_useFogOFWarDiscovery } from 'react-router-dom'
import Landing from '../components/Home/Landing'
import AboutPage from '../components/About/About'
import DiscoveryFeed from '../components/Discovery/Discovery'
import AuctionRoom from '../components/AuctionRoom/Auctionroom.jsx'
import Uploadform from '../components/Dashboard/Uploadform.jsx'
import Register from '../components/Home/Register.jsx'
import AuthPage from '../components/Autho/Autho.jsx'
import Dashboard from '../components/Dashboard/Dashboard.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Landing />} />
      <Route path='about' element={<AboutPage/>}/>
      <Route path="discovery" element={<DiscoveryFeed />} />
      <Route path="auctionroom" element={< AuctionRoom />} />
      <Route path='uploadform' element={< Uploadform />}/>
      <Route path='Dashboard' element={< Dashboard />}/>
      <Route path='register' element={<Register />} />
      <Route path='autho' element={<AuthPage />}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
