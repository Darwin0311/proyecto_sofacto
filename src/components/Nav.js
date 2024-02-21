import React from "react";
import logoempresa from "../img/logoempresa.png";
// import login from "./login";
import "../index.css";

export const Nav = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoempresa} alt="Logo" width={100} />
      </div>
      <ul>
        <li>Inicio</li>
        <li>Sobre nosotros</li>
        <li>Contacto</li>
        <li>Ayuda</li>
      </ul>
      <div className="login">
        <ul>
          <li>Iniciar sesion</li>
          <li>Registrarse</li>
        </ul>
      </div>
    </header>
  );
};
