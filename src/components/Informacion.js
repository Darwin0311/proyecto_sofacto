import React from "react";
import logoempresa from "../img/logoempresa.png";
import "../index.css";
import whatsapp from "../img/WhatsApp.png";
import gmail from "../img/gmail.png";
import maps from "../img/ubi.png";

export const Informacion = () => {
  return (
    <div>
      <section id="">
        <div className="cont_init">
          <img src={logoempresa} width={80} alt="Logo de la empresa" />
          <p className="letra">
            <p>
              ¿Estás buscando una solución integral para la gestión de tu
              empresa?{" "}
            </p>
            <br />
            <br />
            <p>¡Tenemos la respuesta!</p>
            <br />
            <br />
            SOFACTO. es el software definitivo para simplificar tus procesos de
            facturación, control <br />
            de inventario y registro de ventas. Con una interfaz amigable y de
            fácil uso, SOFACTO. <br />
            te permite automatizar tus tareas diarias y enfocarte en lo que
            realmente importa: hacer crecer tu negocio.
            <br />
            <br />
            <br />
            <p>¿Te preocupa la complejidad del proceso de facturación? </p>
            <br />
            <br />
            Con este software podrás generar facturas de manera
            <br />
            rápida y sencilla, sin tener que preocuparte por errores o demoras.
            <br />
            <br />
          </p>
        </div>
      </section>
      <div className="contacto">
        <h3>Contacto</h3>
        <h4 className="inf">Correo electrónico: johancasilimas@gmail.com</h4>
        <h4 className="inf">Teléfono: 3112599859</h4>
        <h4 className="inf">Dirección: Plaza paloquemao - Sección de quesos</h4>
      </div>
      <div className="imagenes-contacto">
        <a href="https://web.whatsapp.com/">
          <img src={whatsapp} alt="Teléfono" />
        </a>
        <a href="https://gmail.com">
          <img src={gmail} alt="Correo electrónico" />
        </a>
        <a href="https://goo.gl/maps/QZThyFAHNNVGg8dD6">
          <img src={maps} alt="Dirección" />
        </a>
      </div>
    </div>
  );
};
