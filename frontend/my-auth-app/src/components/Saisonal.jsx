import React,{useState, useEffect} from 'react'
import axios from "axios"
import {Splide, SplideSlide} from "@splidejs/react-splide" 
import "@splidejs/react-splide/css"
import { Link } from 'react-router-dom';
import styled from "styled-components"
function Saisonal() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the backend API
    axios.get('http://localhost:3005/api/products/category/toys')
      .then(response => {
        setProducts(response.data.products);
        // console.log(products)
      })
      .catch(error => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);


  return (
    <div> 
<Wrapper>
      <h2 >Saisonal Picks</h2>
      <Splide  options={{
        perPage:3,
        gap: "5rem",  arrows: false, pagination: true, drag:"free"
      }}> 
         {products.map((product)=>(

<SplideSlide key={product._id}>
             {/* div = card */}
        <Card > 
         {/* Link add the route to our recipes */}
          <Link to={`/products/${product._id}`}>
          <div >
        <img src={`${product.images[0]} `}  alt="" />
        {/* <p>{product.images[0]}</p> */}
          </div>
          <h2>{product.name}</h2>
      <Gradient />
      </Link>

         </Card>
      </SplideSlide>
         ))}
     </Splide>
   </Wrapper>
   
    
            {/* <p>Rating: {product.rating} ({product.reviews} reviews)</p> */}
           
         
      
      
      </div>
  )
}

const Wrapper = styled.div`
font-family: "Matemasie", sans-serif;
margin: 4rem 0rem;
display:flex;
flex-direction: column

`
const Card= styled.div`
min-height: 25rem;
border-radius: 1rem;
overflow: hidden;
position: relative;


img{
border-radius: 1rem;
position: absolute;
left:0;
width: 100%;
height: 100%;
object-fit: cover;
}
h2{

color:black;
// gap:20px;
position: absolute;
z-index : 10;
left: 5%;
bottom:20%,

 transform: translate(-50%, 0%);


font-weight: 200;
font-size:1rem;
// height: 40%;
font-family: "Matemasie", sans-serif;
display:flex;
justify-content: center;
align-items: center;


// }

`
const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`
export default Saisonal

//   )
  


