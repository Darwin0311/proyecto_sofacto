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
 *     UsuarioDetalle:
 *       type: object
 *       properties:
 *         Correo:
 *           type: string
 *         Contrasena:
 *           type: string
 *         IdCargo:
 *           type: integer
 *     UsuarioSesion:
 *       type: object
 *       properties:
 *         correo:
 *           type: string
 *         contrasena:
 *           type: string
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

const express = require("express");
const usuarioController = require("../controllers/iniciosesion");
const routerUsuarios = express.Router();

/**
 * @swagger
 * /usuarios/logeo:
 *   post:
 *     summary: Iniciar sesión de usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioSesion'
 *     responses:
 *       '200':
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 usuario:
 *                   $ref: '#/components/schemas/UsuarioDetalle'
 *       '401':
 *         description: Credenciales incorrectas
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Error al iniciar sesión
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerUsuarios.post("/usuarios/logeo", usuarioController.iniciarSesion);

/**
 * @swagger
 * /usuarios/obtener:
 *   get:
 *     summary: Obtener todos los usuarios (solo para propósitos de desarrollo)
 *     tags: [Usuarios]
 *     responses:
 *       '200':
 *         description: Lista de usuarios obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 usuarios:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/UsuarioDetalle'
 *       '500':
 *         description: Error al obtener los usuarios
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerUsuarios.get("/usuarios/obtener", usuarioController.obtenerUsuarios);

/**
 * @swagger
 * /usuarios/obtener:
 *   post:
 *     summary: Obtener un usuario por correo y contraseña
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UsuarioSesion'
 *     responses:
 *       '200':
 *         description: Usuario obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UsuarioDetalle'
 *       '404':
 *         description: Usuario no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       '500':
 *         description: Error al obtener el usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerUsuarios.post("/usuarios/obtener", usuarioController.obtenerUsuarioPorCorreoYContrasena);

module.exports = routerUsuarios;
