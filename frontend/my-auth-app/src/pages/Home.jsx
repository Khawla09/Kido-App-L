import React from 'react'
import Hero from '../components/Hero'
import Popular from "../components/Popular"
import Saisonal from '../components/Saisonal'
function Home() {
  return (
    <div>
      <Hero />
      <Popular />
      <Saisonal />
    </div>
  )
}

export default Home