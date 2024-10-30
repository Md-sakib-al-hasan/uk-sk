import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"




function App() {
  const [data,setData] =  useState([])



  useEffect(() => {
    fetch(import.meta.env.VITE_URL)
       .then(res =>res.json())
       .then(data => setData(data))
  },[])
  return (
    <> 
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signin">sign</Link></li>
      </ul>
       <ul>
        {
          data?.map(item => <li key={item._id}>{item.customerName}</li>)
        }
       </ul>
      <Outlet></Outlet>

    </>
  )
}

export default App
