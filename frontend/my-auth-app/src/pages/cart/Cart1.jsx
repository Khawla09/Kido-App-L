import React, { useContext } from 'react'
import { Cartcontext } from '../../context/Context'
import "../cart/cart.css"
function Cart1() {
   const GlobalState =  useContext(Cartcontext);
   const state = GlobalState.state;
   const dispatch = GlobalState.dispatch;
   const total = state.reduce((total, item)=>{
   return(total+ item.price * item.quantity)
   },0)
  return (
    <div className='cart'><h1>Shopping Cart</h1>
    {state.map((item, index)=>{
        
        return(
            <div className='card' key={index}>
                <img src={item.images[0]} alt="NA"  />
                <p>{item.name}</p>
                
                <p>Price ${item.quantity * item.price}</p>
                <div className="quantity">
                    <button onClick={()=>dispatch({type:'INCREASE', payload:item})}>+</button>
                    <p>{item.quantity}</p>
                    <button onClick={()=>{
                        if(item.quantity > 1){
                            dispatch({type:"DECREASE", payload: item})}else{
                                dispatch({type:"REMOVE", payload: item})
                            }
                        }
                    }>-</button>
                </div>
                <h2 onClick={()=>dispatch({type:"REMOVE", payload: item})}>X</h2>
            </div>
        )
    })}
    {state.length > 0 && <div className='total'><h2>${total}</h2></div>}
    </div>
  )
}

export default Cart1