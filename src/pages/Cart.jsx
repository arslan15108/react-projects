import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext';
import { Navigate, useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const {cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);
  const cartProducts = food_list.filter(item => cartItems[item._id] > 0); 
  return (
    <div className='cart mx-auto md:w-4/5 mt-8'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />

      {
        cartProducts.map((item,index) => {
            return (
              <div key={index}>
              <div className='cart-items-title cart-items-item my-4'>
                  <img className='w-32' src={item.image} alt='product-image' />
                  <p> {item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <button onClick={()=>removeFromCart(item._id)} className='text-white bg-red-700 w-8 h-8 rounded-full pb-1 mx-auto'>x</button>
              </div>
              <hr />
              </div>
            )

          })
          
      }


      </div>
{
  cartProducts 
    ?<><div className='mt-28'>
        <h2 className='text-2xl font-bold mb-3'>Cart Totals</h2>
      </div>
      <div>
          <div className='flex justify-between p-2'>
            <p className='text-gray-500'>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='flex justify-between p-2'>
            <p className='text-gray-500'>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <hr />
          <div className='flex justify-between p-2'>
            <b>Total</b>
            <b>${getTotalCartAmount() + 2}</b>
          </div>

      <button onClick={()=>navigate('/order')} className='uppercase bg-orange-600 text-white px-3 py-2 rounded-xl text-sm mt-4'>Procced to checkout</button>

      </div> </> : ""

}



    </div>
  )
}

export default Cart