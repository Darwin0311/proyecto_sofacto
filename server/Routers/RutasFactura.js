/**
 * @swagger
 * tags:
 *   name: Facturas
 *   description: Operaciones relacionadas con facturas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     FacturaDetalle:
 *       type: object
 *       properties:
 *         descripcion:
 *           type: string
 *         cantidad:
 *           type: integer
 *         precio:
 *           type: number
 *         total:
 *           type: number
 *     FacturaRequest:
 *       type: object
 *       properties:
 *         idCliente:
 *           type: integer
 *         nombreCliente:
 *           type: string
 *         direccionCliente:
 *           type: string
 *         ciudadCliente:
 *           type: string
 *         paisCliente:
 *           type: string
 *         telefonoCliente:
 *           type: string
 *         emailCliente:
 *           type: string
 *         numeroFactura:
 *           type: string
 *         fechaFactura:
 *           type: string
 *         metodoPago:
 *           type: string
 *         nombreEmpleado:
 *           type: string
 *         subtotal:
 *           type: number
 *         iva:
 *           type: number
 *         total:
 *           type: number
 *         dineroRecibido:
 *           type: number
 *         cambio:
 *           type: number
 *         detallesFactura:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/FacturaDetalle'
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

const express = require("express");
const facturaController = require("../Controllers/FacturaEnd");
const routerFacturas = express.Router();

/**
 * @swagger
 * /facturas/obtener:
 *   get:
 *     summary: Obtiene todas las facturas
 *     tags: [Facturas]
 *     responses:
 *       '200':
 *         description: Lista de facturas obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FacturaRequest'
 *       '500':
 *         description: Error al obtener las facturas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerFacturas.get("/facturas/obtener", facturaController.obtenerFacturas);

/**
 * @swagger
 * /facturas/crear:
 *   post:
 *     summary: Crear una nueva factura con sus detalles
 *     tags: [Facturas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FacturaRequest'
 *     responses:
 *       '200':
 *         description: Factura creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Error al crear la factura
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerFacturas.post("/facturas/crear", facturaController.crearFactura);

module.exports = routerFacturas;
