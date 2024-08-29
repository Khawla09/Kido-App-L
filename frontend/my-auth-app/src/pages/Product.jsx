//when we click product picture it takes us to the info page of this porduct
import React,{useState, useEffect, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"
import { Link } from 'react-router-dom';
// import { useCart } from '../components/CartContext';
import { Cartcontext } from '../context/Context';

function Product() {
  // const { userId } = useContext(UserContext);
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);
    const GlobalState= useContext(Cartcontext);
    const dispatch = GlobalState.dispatch;
   
  const isUserSignedin = !!localStorage.getItem('token');
  const navigate = useNavigate();
 
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
    product.quantity = 1
    // const handleAddToCart = () => {

    //   addToCart(product._id, 1);
    //   alert('product added succesfully')
    // };
  
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
        <button className="add-to-cart" onClick={()=>dispatch({type:'ADD', payload: product}, alert('Product added succesfully'))}  >Add to Cart</button>
      {/* <button style={styles.button} type='submit' >Add Cart</button> */}
  

{isUserSignedin ? (
  <>
  {/* <p>fist dispay</p> */}
  <h2>⭐⭐⭐⭐⭐</h2>
  <h3>
  <Link to={"/reviews"}>Add Reviews</Link>
  </h3>
</>)
: (
  <>
 
  <h2>⭐⭐⭐⭐⭐</h2>
  <h3>
  <Link to={"/mainreviews"}>Reviews</Link>
  </h3>
  </>)}


      {/* <h2>⭐⭐⭐⭐⭐</h2>
      <h3>
      <Link to={"/profile"}>Reviews</Link>
      </h3> */}
    
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
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderBottom: "1px solid #ddd",
  },
  prodSize: {
    marginBottom: "120px",
  },
  
};
export default Product