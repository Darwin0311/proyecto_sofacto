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
 *         Contacto:
 *           type: string
 *       required:
 *         - Empresa
 *         - Contacto
 */

const express = require("express");
const router = express.Router();
const datosController = require("../Controllers/ProveedorController");

/**
 * @swagger
 * /proveedor:
 *   get:
 *     summary: Obtener todos los proveedores
 *     tags: [Proveedores]
 *     responses:
 *       200:
 *         description: Lista de proveedores obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Proveedor'
 */
router.get("/P", datosController.obtenerProveedores);

/**
 * @swagger
 * /proveedor/{id}:
 *   get:
 *     summary: Obtener un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del proveedor a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Datos del proveedor obtenidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       404:
 *         description: No se encontró el proveedor con el ID especificado
 */
router.get("/P/:id", datosController.obtenerProveedorPorId);

/**
 * @swagger
 * /proveedor:
 *   post:
 *     summary: Crear un nuevo proveedor
 *     tags: [Proveedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proveedor'
 *     responses:
 *       200:
 *         description: Proveedor creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 */
router.post("/crear", datosController.crearProveedor);

/**
 * @swagger
 * /proveedor/{id}:
 *   put:
 *     summary: Actualizar un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del proveedor a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Proveedor'
 *     responses:
 *       200:
 *         description: Proveedor actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Proveedor'
 *       404:
 *         description: No se encontró el proveedor con el ID especificado
 */
router.put("/modificar/:id", datosController.actualizarProveedor);

/**
 * @swagger
 * /proveedor/{id}:
 *   delete:
 *     summary: Eliminar un proveedor por ID
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del proveedor a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Proveedor eliminado correctamente
 *       404:
 *         description: No se encontró el proveedor con el ID especificado
 */
router.delete("/eliminar/:id", datosController.eliminarProveedor);

module.exports = router;