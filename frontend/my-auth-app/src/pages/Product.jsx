//when we click product picture it takes us to the info page of this porduct
import React,{useState, useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { CartContext } from '../components/CartContext';
import styled from "styled-components"
// import {UserContext} from "../components/UserContext"
import { useCart } from '../components/CartContext';
// import "../styling/prodStyle.css"

function Product() {
  // const { userId } = useContext(UserContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();
//*************************************** */
    useEffect(() => {
      axios.get(`http://localhost:3005/api/products/${id}`)
        .then(response => {
          setProduct(response.data);
        })
        .catch(error => {
          setError("Error fetching product details.");
          console.error("There was an error fetching the product!", error);
        });
    }, [id]);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!product) {
      return <div>Loading...</div>;
    }
    const handleAddToCart = () => {

      addToCart(product._id, 1);
      alert('product added succesfully')
    };
  
  return (
  <div style={styles.container} >
     <img style={styles.image} src={product.images[0]} alt={product.name} className="product-detail-image" />
     <div className="infos">
     <h2 style={styles.heading}>{product.name}</h2>
      <p>{product.description}</p>
      <p style={styles.paragraph}>Price: ${product.price}</p>
      <div className="product-sizes" style={styles.prodSize}>
          <p style={{fontWeight:"bold"}}>Sizes</p>
          {product.sizes.map((size, index) => (
            <button key={index} className="size-button">
              {size}
            </button>
          ))}
        </div>
      <button style={styles.button} type='submit' onClick={()=>handleAddToCart(product,1)}>Add Cart</button>
    
     </div>
      {/* Add more details as needed */}
            {/* <p>Rating: {product.rating} ({product.reviews} reviews)</p>  */}
  </div>
  )
}
const styles = {
  container: {
    fontWeight: "bold",
    display: "flex",
    margin: "6rem",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },
  heading: {
    fontSize: '40px',
  },
  paragraph: {
    fontSize: '20px',
    color: '#333',
  },
  button: {
    backgroundColor: 'var(--secondary-color)',
    border: "gray",
    padding: "20px ",
    width: "200px",
    textAlign: "center",
    color: "white",
  },
  image: {
    position: "relative",
    width: "100%",
    height: "auto",
    objectFit: "cover",
    borderBottom: "1px solid #ddd",
  },
  prodSize: {
    marginBottom: "120px",
  },
  // container: {
  //   fontWeight:"bold",
  //   display:"flex",
  //   // flexDirection: "column",
  //   margin:"6rem",
  //   position:"absolute",
 
  //   jutifyContent:"center",
  //   alignItems: "center",
  //   gap:"30px"
  // },
  // heading: {
  //   fontSize: '40px',
  //   // color: 'var(--secondary-color)',
  // },
  // paragraph: {
  //   fontSize: '20px',
  //   color: '#333',
  // },
  // button:{
  //   backgroundColor: 'var(--secondary-color)',
  //   border:"gray",
  //   padding:"20px ",
  //   width:"200px",
  //  textAlign:"center",
  //  color:"white"

  // },

  // image:{
  //     position:"relative",
  //     width: "100%",
  //     height: "auto",
  //     objectFit: "cover",
  //     borderBottom: "1px solid #ddd",
   
  // },
  // prodSize:{
  //   marginBottom:"120px"

  // }
};
export default Product