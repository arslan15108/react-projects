import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data =useLoaderData()
    // const [data,setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Muhammad-Arsl')
    //     .then(response => response.json())
    //     .then(data) 
    //     console.log(data);
    //     setData(data);
    // },[])

  return (
    <div className='text-3xl text-white bg-gray-600 text-center py-5'> 
        <h1>Github Followers: {data.followers}</h1>
        <img src={data.avatar_url} alt='Git Progile Image' width={300} /> 
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}