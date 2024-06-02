-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 31-05-2024 a las 23:14:28
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lina`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `idStock` int(11) NOT NULL AUTO_INCREMENT,
  `producto` varchar(50) DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `fecha` varchar(20) DEFAULT NULL,
  `precioUnitario` varchar(20) DEFAULT NULL,
  `cantidad` varchar(20) DEFAULT NULL,
  `unidadMedida` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`idStock`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`idStock`, `producto`, `categoria`, `fecha`, `precioUnitario`, `cantidad`, `unidadMedida`) VALUES
(1, 'leche', 'lacteos', '31/05/2024', '1300', '6', 'litros'),
(75, 'huevo', 'huevos', '31/05/2024', '160', '12', 'unidad'),
(76, 'harina 000', 'harinas', '31/05/2024', '650', '3', 'kilo'),
(77, 'aceite de oliva', 'aceites', '31/05/2024', '20000', '2', 'litro'),
(78, 'azucar refinada', 'endulzantes', '31/05/2024', '750', '4', 'kilo'),
(79, 'sal', 'sazonador', '31/05/2024', '700', '4', 'kilos'),
(80, 'arroz', 'cereal', '31/05/2024', '3000', '5', 'kilos'),
(81, 'harina leudante', 'harinas', '31/05/2024', '1000', '2', 'kilos'),
(82, 'oregano', 'condimentos', '31/05/2024', '900', '3', '50 gr.'),
(83, 'aceite de girasol', 'aceites', '31/05/2024', '1500', '2', 'litros');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
