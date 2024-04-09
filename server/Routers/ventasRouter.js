/**
 * @swagger
 * tags:
 *   name: Ventas
 *   description: Operaciones relacionadas con ventas
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     DetalleFactura:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         numeroFactura:
 *           type: string
 *         fecha:
 *           type: string
 *         
 *     DetallesFacturaResponse:
 *       type: array
 *       items:
 *         $ref: '#/components/schemas/DetalleFactura'
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *     FechaResponse:
 *       type: string
 *   parameters:
 *     FechaInicialQueryParam:
 *       name: fechaInicial
 *       in: path
 *       required: true
 *       schema:
 *         $ref: '#/components/schemas/FechaResponse'
 *     FechaFinalQueryParam:
 *       name: fechaFinal
 *       in: path
 *       required: true
 *       schema:
 *         $ref: '#/components/schemas/FechaResponse'
 */

const express = require("express");
const ventaController = require("../Controllers/ventasController");
const router = express.Router();

/**
 * @swagger
 * /ventas/factura_vendida:
 *   get:
 *     summary: Obtiene todos los detalles de las facturas vendidas
 *     tags: [Ventas]
 *     responses:
 *       '200':
 *         description: Detalles de las facturas vendidas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetallesFacturaResponse'
 *       '500':
 *         description: Error al obtener los detalles de la factura
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/ventas/factura_vendida", ventaController.obtenerDetallesFactura);

/**
 * @swagger
 * /ventas/detalles-factura/{numeroFactura}:
 *   get:
 *     summary: Obtiene los detalles de una factura por número de factura
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: numeroFactura
 *         required: true
 *         description: Número de factura a buscar
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Detalles de la factura encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetallesFacturaResponse'
 *       '500':
 *         description: Error al obtener el detalle de la factura
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/ventas/detalles-factura/:numeroFactura", ventaController.obtenerDetalleFacturaPorNumeroFactura);

/**
 * @swagger
 * /ventas/ventas/{fecha}:
 *   get:
 *     summary: Obtiene las ventas por fecha
 *     tags: [Ventas]
 *     parameters:
 *       - in: path
 *         name: fecha
 *         required: true
 *         description: Fecha de las ventas a buscar
 *         schema:
 *           $ref: '#/components/schemas/FechaResponse'
 *     responses:
 *       '200':
 *         description: Detalles de las ventas encontradas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetallesFacturaResponse'
 *       '500':
 *         description: Error al obtener las ventas por fecha
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/ventas/ventas/:fecha", ventaController.obtenerVentasPorFecha);

/**
 * @swagger
 * /ventas/ventas/{fechaInicial}/{fechaFinal}:
 *   get:
 *     summary: Obtiene las ventas por rango de fechas
 *     tags: [Ventas]
 *     parameters:
 *       - $ref: '#/components/parameters/FechaInicialQueryParam'
 *       - $ref: '#/components/parameters/FechaFinalQueryParam'
 *     responses:
 *       '200':
 *         description: Detalles de las ventas encontradas en el rango de fechas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DetallesFacturaResponse'
 *       '500':
 *         description: Error al obtener las ventas por rango de fechas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get("/ventas/ventas/:fechaInicial/:fechaFinal", ventaController.obtenerVentasPorRangoFechas);

module.exports = router;
