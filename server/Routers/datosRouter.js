/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Operaciones relacionadas con productos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     ProductoDetalle:
 *       type: object
 *       properties:
 *         IdProducto:
 *           type: integer
 *         Nombre:
 *           type: string
 *         idCategoria:
 *           type: integer
 *         Nombre_categoria:
 *           type: string
 *         Proveedor:
 *           type: string
 *         Descripcion:
 *           type: string
 *         Fecha:
 *           type: string
 *         Estado:
 *           type: string
 *         Precio:
 *           type: number
 *     ProductoRequest:
 *       type: object
 *       properties:
 *         Nombre:
 *           type: string
 *         Nombre_categoria_FK:
 *           type: integer
 *         Proveedor:
 *           type: string
 *         Descripcion:
 *           type: string
 *         Fecha:
 *           type: string
 *         Estado:
 *           type: string
 *         Precio:
 *           type: number
 *     ErrorResponse:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 */

const express = require("express");
const productoController = require("../Controllers/datosController");
const routerProductos = express.Router();

/**
 * @swagger
 * /productos/obtener:
 *   get:
 *     summary: Obtiene todos los productos
 *     tags: [Productos]
 *     responses:
 *       '200':
 *         description: Lista de productos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProductoDetalle'
 *       '500':
 *         description: Error al obtener los productos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerProductos.get("/productos/obtener", productoController.obtenerProductos);

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a obtener
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Datos del producto obtenidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ProductoDetalle'
 *       '500':
 *         description: Error al obtener el producto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerProductos.get("/productos/:id", productoController.obtenerProductoPorId);

/**
 * @swagger
 * /productos/crear:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductoRequest'
 *     responses:
 *       '200':
 *         description: Producto creado correctamente
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
 *         description: Error al crear el producto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerProductos.post("/productos/crear", productoController.crearProducto);

/**
 * @swagger
 * /productos/actualizar-producto/{id}:
 *   put:
 *     summary: Actualizar un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a actualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProductoRequest'
 *     responses:
 *       '200':
 *         description: Producto actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Error al actualizar el producto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerProductos.put("/productos/actualizar-producto/:id", productoController.actualizarProducto);

/**
 * @swagger
 * /productos/agregar-cantidad/{id}:
 *   put:
 *     summary: Agregar cantidad a un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto al que se agregará cantidad
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cantidad:
 *                 type: number
 *     responses:
 *       '200':
 *         description: Cantidad agregada correctamente al producto
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Error al agregar cantidad al producto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerProductos.put("/productos/agregar-cantidad/:id", productoController.agregarCantidad);

/**
 * @swagger
 * /productos/vender-producto:
 *   put:
 *     summary: Vender productos
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productosVendidos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     Nombre:
 *                       type: string
 *                     cantidadVendida:
 *                       type: number
 *     responses:
 *       '200':
 *         description: Productos vendidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '500':
 *         description: Error al vender los productos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerProductos.put("/productos/vender-producto", productoController.venderProducto);

/**
 * @swagger
 * /productos/eliminar-producto/{id}:
 *   delete:
 *     summary: Eliminar un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto a eliminar
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Producto eliminado correctamente
 *       '500':
 *         description: Error al eliminar el producto
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerProductos.delete("/productos/eliminar-producto/:id", productoController.eliminarProducto);

/**
 * @swagger
 * /productos/productos-disponibles:
 *   post:
 *     summary: Obtiene todos los productos disponibles
 *     tags: [Productos]
 *     responses:
 *       '200':
 *         description: Lista de productos disponibles obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ProductoDetalle'
 *       '500':
 *         description: Error al obtener los productos disponibles
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
routerProductos.post("/productos/productos-disponibles", productoController.obtenerProductosDisponibles);

module.exports = routerProductos;
