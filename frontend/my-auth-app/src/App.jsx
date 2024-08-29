
import Pages from "./pages/Pages"
import Navbar from "./components/Navbar"
import Category from "./components/Category"
import Profile from "./pages/Reviews"
import { Link } from "react-router-dom"
function App() {
  

  return (
   <div className="App">


<Navbar />

{/* <Category /> */}

<Pages />


   </div>
  )
}

export default App
