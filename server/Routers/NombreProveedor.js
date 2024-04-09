/**
 * @swagger
 * tags:
 *   name: Proveedores
 *   description: Operaciones relacionadas con proveedores
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Proveedor:
 *       type: object
 *       properties:
 *         IdProveedor:
 *           type: integer
 *         Empresa:
 *           type: string
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

const express = require("express");
const routerSelect = express.Router();
const proveedorController = require("../Controllers/Proveedor");

/**
 * @swagger
 * /proveedores:
 *   get:
 *     summary: Obtener proveedores
 *     tags: [Proveedores]
 *     responses:
 *       '200':
 *         description: Lista de proveedores obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Proveedor'
 *       '500':
 *         description: Error al obtener proveedores
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerSelect.get("/proveedores", proveedorController.obtenerProveedores);

module.exports = routerSelect;
