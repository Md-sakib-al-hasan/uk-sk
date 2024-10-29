import { Link, Outlet } from "react-router-dom"




function App() {


  return (
    <> 
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signin">sign</Link></li>
      </ul>
      <Outlet></Outlet>
    </>
  )
}

export default App
