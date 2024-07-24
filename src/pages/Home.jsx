import React, { useState } from 'react'
import Banner from '../components/Banner/Banner'
import ExploreMenu from '../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay';
import AppDownload from '../components/AppDownload/AppDownload';

function Home() {

  const [category, setCategory] = useState('All');

  return (
    <div>
      <Banner />
      <ExploreMenu category = {category} setCategory = {setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home