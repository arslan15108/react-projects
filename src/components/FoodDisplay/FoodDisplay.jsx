import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

function FoodDisplay({category}) {
    const {food_list} = useContext(StoreContext)
    return (
      <div className="mx-auto max-w-[1200px]">
          <h2 className='text-2xl font-bold mb-8'>Top Dishes Near You!</h2>
        <div className='max-h-[550px] overflow-y-auto food-display-list-container'>

          <div className='food-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pr-2'>
            {
              food_list.map((item,index) => {
                if(category === "All" || category ===item.category) {
                  return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}  />
                }
              })
            }
          </div>

        </div>
      </div>
  )
}

export default FoodDisplay