/**
 * @swagger
 * tags:
 *   name: Métodos de Pago
 *   description: Operaciones relacionadas con métodos de pago
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     MetodoPago:
 *       type: object
 *       properties:
 *         Metodo_pago:
 *           type: string
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

const express = require("express");
const routerPago = express.Router();
const pagoController = require("../Controllers/Pago");

/**
 * @swagger
 * /metodos-pago:
 *   get:
 *     summary: Obtener métodos de pago
 *     tags: [Métodos de Pago]
 *     responses:
 *       '200':
 *         description: Lista de métodos de pago obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MetodoPago'
 *       '500':
 *         description: Error al obtener métodos de pago
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerPago.get("/metodos-pago", pagoController.obtenerMetodo_pago);

module.exports = routerPago;
