import React, { useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { Link  } from 'react-router-dom';
import { Cartcontext } from '../context/Context';
import Category from '../components/Category';

function Type() {
  // const { userId } = useUser()
    //usestae
    let { category } = useParams();
    const [prodCategory, setProdCategory] = useState(null);
    const [error, setError] = useState(null);
    const GlobalState= useContext(Cartcontext);
   const dispatch = GlobalState.dispatch;
  
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
    //new
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!prodCategory) {
      return <div>Loading...</div>;
    }

   
  console.log('global state', GlobalState)

  return (
  
<div className="product-grid"> 

  {prodCategory.products.map((elm, index) =>{ 
       elm.quantity = 1
    return(

    <div className="product-card" key={index}> 

    <Link to={`/products/${elm._id}`} > <img src={elm.images[0]} alt={elm.name} className="category-detail-image" /></Link> 
      <div className='product-info' key={elm.id}>

      <Link to={`/products/${elm._id}`}> <h2>{elm.name}</h2></Link> 
        <p className='product-price'>${elm.price}</p>
        <div className="product-sizes" key={elm.id} >
          <p style={{fontWeight:"bold"}}>Ages</p>
          {elm.sizes.map((size, index) => (
            <button key={index} className="size-button">
              {size}
            </button>
          ))}
        </div>

        <button className="add-to-cart" onClick={()=>dispatch({type:'ADD', payload: elm}, alert('product added succesfully'))}  >Add to Cart</button>
        {/* <button className="add-to-cart" onClick={() =>handleAddToCart}  >Add to Cart</button> */}
      </div>
    </div>
  )})}
</div>

           
  )
}

export default Type

