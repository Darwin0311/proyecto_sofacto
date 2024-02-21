import logoempresa from "../img/logoempresa.png";
import "../index.css";

export const Nav = () => {
  return (
    <header>
      <div className="logo">
        <link to="/"></link>
        <img src={logoempresa} alt="Logo" width={100} />
        <ul className="info">
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
      </div>
    </header>
  );
};