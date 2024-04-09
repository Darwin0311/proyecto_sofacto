const swaggerJSDOC = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Conexión con API MySQL",
      version: "1.0.0",
      description: "Documentación de los endpoints de Admins y descripción de rutas",
    },
    servers: [
      {
        url: "http://localhost:3000",  
        description: "Documentación de la API",
      },
    ],
  },
  // Aquí agregamos las rutas de los archivos de definición de ruta
  apis: [
    "./Routers/datosRouter.js",
    "./Routers/ProveedorRouter.js",
    "./Routers/ventasRouter.js",
    "./Routers/RutasFactura.js",
    "./Routers/login.js",
    "./Routers/Nombre_cargo.js",
    "./Routers/nuevousuario.js",
    "./Routers/rutaPago.js",
    "./Routers/NombreProveedor.js"


  ]
};

const swaggerSpec = swaggerJSDOC(options);

console.log("Esto es:  ", swaggerSpec)

const swaggerJSDOCs = (app, port) => {
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(
    `Versión No 1 de la documentación estará disponible en http://localhost:${port}/api-docs`
  );
};

module.exports = {
  swaggerJSDOCs
};
