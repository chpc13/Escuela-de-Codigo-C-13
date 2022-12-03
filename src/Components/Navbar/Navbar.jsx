import React from 'react'
import'./Navbar.css'

const Navbar = () => {
  return (
      <div>
          <nav className="navbar">
              
              <a href="./img pi/Screenshot_20220824-130732_WhatsApp.jpg" className="navbar__logo">
                  
     <span>Escuela Código C13</span></a>
              
 <input type="checkbox"id="check"className="check"/>
              
    <label for="check" className="checkbtn">
    <i className="ph-list"></i>
    </label> 
    <ul className="navbar__box">
        <li className="navbar__list"><a href="./img pi/codigo123.png" className="navbar__links">Nosotros</a></li>
        <li className="navbar__list"><a href="./img pi/WhatsApp Video 2022-11-02 at 9.49.38 AM.mp4" className="navbar__links">Carreras</a></li>
        <li className="navbar__list"><a href="https://twitter.com/Sonbatac13/status/1464243584048283654?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1464243584048283654%7Ctwgr%5E48d2274cf2a04934925a40ce8254b7ba367c9038%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.elcolombiano.com%2Fantioquia%2Fcodigo-c13-formara-programadores-de-software-en-san-javier-EF17216013" className="navbar__links">Noticias</a></li>
    </ul>
    <a href="./login.html"><h3>INGRESAR</h3></a>

</nav>
    </div>
  )
}

export default Navbar