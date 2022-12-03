import React from 'react'
import { Link } from 'react-router-dom'
import'./Navbar.css'

const Navbar = () => {
  return (
      <div>
          <nav className="navbar">
              
              <a href="./img pi/Screenshot_20220824-130732_WhatsApp.jpg" className="navbar__logo">
                  
     <span>Escuela Código C13</span></a>
              
 {/* <input type="checkbox"id="check"className="check"/> */}
              
    <label for="check" className="checkbtn">
    <i className="ph-list"></i>
    </label> 
              
    <ul className="navbar__box">
        <li className="navbar__list">
            <Link to='/Abouts'>Nosotros</Link>    
        </li>
        <li className="navbar__list">
            <Link to='/Career'>Carreras</Link>     
        </li>
        <li className="navbar__list">
            <Link to='/News'>Noticias</Link>       
        </li>
        <li>
            <Link to= "/Login">Login</Link>        
        </li>
    </ul>
 

</nav>
    </div>
  )
}

export default Navbar