import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([]) //default m dat akuch nhi h
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')//get data from our profile
    //  .then(response => response.json()) //response converted to json
    //  .then(data => {  // we get data from thin 2nd then
    //     console.log(data);   
    //     setData(data)  // setdata m value dal do so value kya dalna h wo api read krne se aayenge it we get from data.followers
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/aditya0124')
    return response.json()
}