/**
 * @swagger
 * tags:
 *   name: Cargos
 *   description: Operaciones relacionadas con cargos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cargo:
 *       type: object
 *       properties:
 *         Id:
 *           type: integer
 *         Nombre:
 *           type: string
 *         Nombre_cargo:
 *           type: string
 *         Estado_actual:
 *           type: string
 *     Empleado:
 *       type: object
 *       properties:
 *         Id:
 *           type: integer
 *         Nombre:
 *           type: string
 *         Cargo:
 *           type: string
 *         Estado_actual:
 *           type: string
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

const express = require("express");
const cargoController = require("../controllers/Cargo");
const routerCargos = express.Router();

/**
 * @swagger
 * /cargos:
 *   get:
 *     summary: Obtener todos los cargos
 *     tags: [Cargos]
 *     responses:
 *       '200':
 *         description: Lista de cargos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cargo'
 *       '500':
 *         description: Error al obtener los cargos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerCargos.get("/cargos", cargoController.obtenerCargos);

/**
 * @swagger
 * /cargos/{id}:
 *   get:
 *     summary: Obtener un cargo por ID
 *     tags: [Cargos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cargo a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Datos del cargo obtenidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cargo'
 *       '500':
 *         description: Error al obtener el cargo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerCargos.get("/cargos/:id", cargoController.obtenerCargoPorId);

/**
 * @swagger
 * /cargos/crear:
 *   post:
 *     summary: Crear un nuevo cargo
 *     tags: [Cargos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cargo'
 *     responses:
 *       '200':
 *         description: Cargo creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 id:
 *                   type: integer
 *       '500':
 *         description: Error al crear el cargo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerCargos.post("/cargos/crear", cargoController.crearCargo);

/**
 * @swagger
 * /cargos/actualizar/{id}:
 *   put:
 *     summary: Actualizar un cargo por ID
 *     tags: [Cargos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cargo a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cargo'
 *     responses:
 *       '200':
 *         description: Cargo actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Error al actualizar el cargo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerCargos.put("/cargos/actualizar/:id", cargoController.actualizarCargo);

/**
 * @swagger
 * /cargos/eliminar/{id}:
 *   delete:
 *     summary: Eliminar un cargo por ID
 *     tags: [Cargos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cargo a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Cargo eliminado correctamente
 *       '500':
 *         description: Error al eliminar el cargo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerCargos.delete("/cargos/eliminar/:id", cargoController.eliminarCargo);

module.exports = routerCargos;
