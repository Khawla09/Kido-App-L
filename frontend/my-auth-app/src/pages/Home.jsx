import React, { useContext } from 'react'
import Hero from '../components/Hero'
import Popular from "../components/Popular"
import Saisonal from '../components/Saisonal'
import Footer from "../components/Footer"
import Summer from '../components/Summer'
import Category from '../components/Category'


function Home() {

  return (
    <div>
     <Category />
      <Hero />
      <Popular />
      <Saisonal />
      <Summer />
      {/* <Saisonal /> */}
   
     <Footer />
    </div>
  )
}

export default Home