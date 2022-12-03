import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="foot">

      <h2 className="slogan">
        
        "INSPIRAMOS A SOÑAR PARA TRASFORMAR LA REALIDAD "</h2>
       
        <section classNam="footer-redes" />
        <section className="links-referencias">
          <ul>
            <a href="../../assets/participantes-nov.jpeg">
              <h3>NOSOTROS</h3>
            </a>
            <a href="../../assets/sobre nosotros.png">
              <h3>CARRERAS</h3>
            </a>
            <a href="https://twitter.com/Sonbatac13/status/1464243584048283654?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1464243584048283654%7Ctwgr%5E48d2274cf2a04934925a40ce8254b7ba367c9038%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.elcolombiano.com%2Fantioquia%2Fcodigo-c13-formara-programadores-de-software-en-san-javier-EF17216013">
              <h3>NOTICIAS</h3>
            </a>
            <a href="./login.html">
              <h3>INGRESAR</h3>
            </a>
          </ul>
        </section>
        <section className="botones">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-whatsapp"></i>
        </section>
        <img
          className="logooo"
          src="../../assets/codigoc13.png"
          alt="imagen de Escuela"
        />
    </div>
  );
};

export default Footer;
