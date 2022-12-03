import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
       <header class="login">
      <div class="login__imagen"></div>

      <div class="login__form">
        <a href="../html/index.html" class="login__return">
          <i class="ph-arrow-left"></i>
        </a>

        <section class="login__form--fill">
          <h2 class="login__tittle--fill">Iniciar sesión</h2>
          <label for="">Ingresa tu correo</label>
          <input type="email" id="" placeholder="Ingresa tu correo" />
          <label for="">Ingresa tu contraseña</label>
          <input type="password" id="" placeholder="Ingresa tu contraseña" />
          <input type="submit" value="Iniciar sesión"/>
          <a href="./" class="recover__password">Recuperar contraseña</a>
        </section>
      </div>
    </header>
    </div>
  )
}

export default Login
