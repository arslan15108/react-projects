import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';


function FootItem({id,name,price,description,image}) {
    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)


    return (
    <div className='food-item h-full bg-teal-600'>
        <div className="food-item-image-container relative">
            <img className='food-item-image w-full object-cover min-h-60' src={image} alt="food-image" />
            {!cartItems[id] 
            ?<img className='add w-[45px] absolute bottom-[15px] right-[15px] rounded-[50%] cursor-pointer'  onClick={()=>addToCart(id)} src={assets.add_icon_white} /> 
            :<div className='food-item-counter absolute bottom-[15px] right-[15px] flex items-center gap-2 p-2 bg-white rounded-3xl'>
                <img className='cursor-pointer' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} />
                <p>{cartItems[id]}</p>
                <img className='cursor-pointer' onClick={()=>addToCart(id)} src={assets.add_icon_green} />    
            </div>}
        </div>
        <div className="food-item-info p-4">
            <div className="food-item-name-rating">
                <p className='text-xl font-bold tracking-widest text-yellow-50'>{name}</p>
            </div>
            <p className="food-item-desc text-white text-sm">
                {description}
            </p>
            <div className='flex justify-between mt-4 items-center'>
                <p className='food-item-price text-[#ff6347] text-2xl font-bold'>${price}</p>
                <img className='w-22 h-6' src={assets.rating_starts} alt='rating' />
            </div>
        </div>
    </div>
  )
}

export default FootItem