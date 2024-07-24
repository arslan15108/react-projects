import React from 'react'
import { menu_list } from '../../assets/assets'

function ExploreMenu({category,setCategory}) {
  return (
    <div className='explore-menu mx-5 pt-8'>
        <div className='text-center'>
            <h1 className='text-2xl font-bold'>Explore Our Menu</h1>
            <p>Choose from a diverse menu featuring a delectable array of dishes.</p>
        </div>
        <div className="explore-menu-list flex flex-wrap gap-7 justify-center my-10">
            {
                menu_list.map((item,index)=>{
                    return (
                        <div onClick={()=>setCategory(prev=>prev === item.menu_name ? "All": item.menu_name)} key={index} className='explore-menu-list-item text-center cursor-pointer'>
                            <img className={`${category === item.menu_name ? "active" : ""}  min-w-[80px] w-[5.5vw]`} src={item.menu_image} alt='' />
                            <p className='text-[#747474]'>{item.menu_name}</p>
                        </div>
                    )
                })
            }    
        </div>    
    </div>
  )
}

export default ExploreMenu