import React, { useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { Link  } from 'react-router-dom';
import {CartContext} from "../components/CartContext"
import { useCart } from '../components/CartContext';
function Type() {
  // const { userId } = useUser()
    //usestae
    let { category } = useParams();
    const [prodCategory, setProdCategory] = useState(null);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();
    // const { addToCart , product } = useContext(CartContext);
   

    useEffect(() => {
      axios.get(`http://localhost:3005/api/products/category/${category}`)
        .then(response => {
          setProdCategory(response.data);
          console.log(response.data)
        })
        .catch(error => {
          setError("Error fetching product details.");
          console.error("There was an error fetching the product!", error);
        });
    }, [category]  
    );
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!prodCategory) {
      return <div>Loading...</div>;
    }
    const handleAddToCart = (prodId) => {

      addToCart(prodId);
      alert('product added succesfully')
    };
  
  return (
<div className="product-grid"> 
  {prodCategory.products.map((elm) => (
    <div className="product-card" key={elm.id}> 


    <Link to={`/products/${elm._id}`} > <img src={elm.images[0]} alt={elm.name} className="category-detail-image" /></Link> 
      <div className='product-info' key={elm.id}>

      <Link to={`/products/${elm._id}`}> <h2>{elm.name}</h2></Link> 
        <p className='product-price'>${elm.price}</p>
        <div className="product-sizes" >
          <p style={{fontWeight:"bold"}}>Ages</p>
          {elm.sizes.map((size, index) => (
            <button key={index} className="size-button">
              {size}
            </button>
          ))}
        </div>

        <button className="add-to-cart" onClick={() =>handleAddToCart(elm._id)}  >Add to Cart</button>
      </div>
    </div>
  ))}
</div>

           
  )
}

export default Type

