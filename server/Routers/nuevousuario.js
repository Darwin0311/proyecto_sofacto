// routes/usuarioRouter.js
/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: Operaciones relacionadas con usuarios
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         IdTipo_identificacion:
 *           type: integer
 *         IdUsuario:
 *           type: integer
 *         Correo:
 *           type: string
 *         Contrasena:
 *           type: string
 *         Verificar_Contrasena:
 *           type: string
 *         IdCargo:
 *           type: integer
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

const express = require("express");
const routerUsuarios = express.Router();
const usuarioController = require("../controllers/Nuevousuario");

/**
 * @swagger
 * /usuarios/ver_usuario:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       '200':
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 *       '500':
 *         description: Error al obtener usuarios
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerUsuarios.get("/usuarios/ver_usuario", usuarioController.obtenerUsuarios);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Datos del usuario obtenidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       '500':
 *         description: Error al obtener el usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerUsuarios.get("/usuarios/:id", usuarioController.obtenerUsuarioPorId);

/**
 * @swagger
 * /usuarios/agregar:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       '200':
 *         description: Usuario creado correctamente
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
 *         description: Error al crear el usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerUsuarios.post("/usuarios/agregar", usuarioController.crearUsuario);

/**
 * @swagger
 * /usuarios/actualizar/{id}:
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       '200':
 *         description: Usuario actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Error al actualizar el usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerUsuarios.put("/usuarios/actualizar/:id", usuarioController.actualizarUsuario);

/**
 * @swagger
 * /usuarios/eliminar/{id}:
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del usuario a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Usuario eliminado correctamente
 *       '500':
 *         description: Error al eliminar el usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerUsuarios.delete("/usuarios/eliminar/:id", usuarioController.eliminarUsuario);

module.exports = routerUsuarios;
