
import './App.css'
import Navbar from './components/Navbar.jsx'

import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import { Suspense } from 'react';




//Fetch data
const fetchTickets = async () => {
  const res = await fetch('/public.json')
  return res.json()
};
//Tostify

function App() {
  const ticketPromise = fetchTickets();
  

  return (
    <>
    <Navbar></Navbar>
    
    <Suspense fallback={<div>Loading tickets...</div>}>
    <Card fetchPromise={ticketPromise}></Card>
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App
