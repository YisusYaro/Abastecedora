-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 05-12-2020 a las 04:15:07
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `id15474228_abastecedora`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `idPedido` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `idEmpleado` int(11) DEFAULT NULL,
  `estatus` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `precioTotal` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`idPedido`, `idUsuario`, `fecha`, `idEmpleado`, `estatus`, `precioTotal`) VALUES
(1, 3, '2020-12-02', 5, 'realizado', 950.00),
(2, 3, '2020-12-03', NULL, 'solicitud', 300.00),
(3, 3, '2020-11-28', 5, 'realizado', 893.50),
(4, 4, '2020-12-04', 6, 'realizado', 540.00),
(5, 4, '2020-12-04', 6, 'realizado', 900.00),
(6, 3, '2020-12-04', 5, 'realizado', 2725.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL,
  `nombreProducto` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `existencia` int(10) NOT NULL,
  `linkIMG` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`idProducto`, `nombreProducto`, `descripcion`, `precio`, `existencia`, `linkIMG`) VALUES
(3, 'Uva', 'Cada unidad cuenta con 10kg.', 300.00, 4, 'https://www.chedraui.com.mx/medias/2502826-00-CH1200Wx1200H?context=bWFzdGVyfHJvb3R8MTUzNjIwfGltYWdlL2pwZWd8aGQxL2hlNy85OTYxMzczODkyNjM4LmpwZ3xiN2YzNzIzYmZhOWU2MDg2NGE3MWFmNDYzNmM2OTNkMzBiNDgxZjU1Njk0OGE4OTA1N2QwYmIxM2U1ZmFmZmQ2'),
(4, 'Manzana roja', 'Cada unidad cuenta con 18 kg de manzana roja', 350.00, 41, '/imagenes/Manzana roja/Manzana roja'),
(5, 'Mandarina', 'Cada unidad contiene 20 kg ', 120.00, 28, 'https://i.pinimg.com/originals/fa/84/ee/fa84eee57266e453e3aaf665bd44b5c0.jpg'),
(6, 'Limón', 'Cada unidad cuenta con 20 kg', 150.00, 13, 'https://www.spa-puntacana.com/wp-content/uploads/2016/03/news_photo_04.jpg'),
(7, 'Aguacate Hass', 'Cada unidad cuenta con 13 kg', 280.00, 9, 'https://imgcdn.larepublica.co/i/1200/2014/06/10211059/aguacate_11jun.jpg'),
(8, 'Tomate', 'Cada unidad cuenta con 25 kg', 220.00, 18, 'https://upload.wikimedia.org/wikipedia/commons/8/88/Bright_red_tomato_and_cross_section02.jpg'),
(16, 'Melocoton', 'Fresco', 1.00, 1, '/imagenes/Melocoton/Melocoton.jpg'),
(21, 'Melón', 'Cada unidad cuenta con 15 kg.', 170.00, 12, '/imagenes/Melón/Melónjpg'),
(24, 'Papaya', 'Cada unidad cuenta con 5 kg.', 50.50, 30, '/imagenes/Papaya/Papayajpg'),
(27, 'Guayaba', 'Cada unidad cuenta con 10 kg.', 180.50, 50, '/imagenes/Guayaba/Guayaba'),
(28, 'Kiwi', 'Cada unidad cuenta con 5 kg.', 750.00, 13, '/imagenes/Kiwi/Kiwi'),
(30, 'Fresa', 'Cada unidad contiene 10 kg.', 150.00, 10, '/imagenes/Fresa/Fresa'),
(34, 'Cebolla morada', 'Cada unidad cuenta con 7 kg.', 160.50, 23, '/imagenes/Cebolla morada/Cebolla morada'),
(35, 'Rábano', 'Cada unidad cuenta con 3 kg.', 47.50, 102, '/imagenes/Rábano/Rábano'),
(36, 'Cebolla', 'Unidad con 30 kgs', 200.00, 30, '/imagenes/Cebolla/Cebolla');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productosPedido1`
--

CREATE TABLE `productosPedido1` (
  `idPedido` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `productosPedido1`
--

INSERT INTO `productosPedido1` (`idPedido`, `idProducto`, `cantidad`, `precio`) VALUES
(1, 3, 2, 600.00),
(1, 4, 1, 350.00),
(2, 3, 1, 300.00),
(3, 6, 1, 150.00),
(3, 7, 1, 280.00),
(3, 34, 2, 321.00),
(3, 35, 3, 142.50),
(4, 3, 1, 300.00),
(4, 5, 2, 240.00),
(5, 7, 2, 560.00),
(5, 21, 2, 340.00),
(6, 28, 3, 2250.00),
(6, 35, 10, 475.00);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `correo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contrasena` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `tipo` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `correo`, `nombre`, `contrasena`, `tipo`) VALUES
(1, 'jesusaleyaro@hotmail.com', 'Jesus Alejandro', '1234', 'dueno'),
(2, 'isaac@hotmail.com', 'Isaac Canalizo', '1234', 'cliente'),
(3, 'ivonnesaldana11@gmail.com', 'Ivonne Saldaña ', 'Manchas123', 'cliente'),
(4, 'saldanap46@gmail.com', 'Pedro Saldaña', 'Minnie', 'cliente'),
(5, 'juan@hotmail.com', 'Juan Perez', '123', 'empleado'),
(6, 'maria@hotmail.com', 'Maria Ramirez', '123', 'empleado'),
(7, 'ximenamsag@outlook.es', 'Ximena Margarita Suárez Aguirre', 'ximena27', 'cliente');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idPedido`),
  ADD KEY `idUsuario` (`idUsuario`),
  ADD KEY `idEmpleado` (`idEmpleado`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idPedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`),
  ADD CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`idEmpleado`) REFERENCES `usuarios` (`idUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
