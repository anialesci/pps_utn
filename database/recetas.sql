-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 31-05-2024 a las 23:13:30
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
-- Estructura de tabla para la tabla `recetas`
--

DROP TABLE IF EXISTS `recetas`;
CREATE TABLE IF NOT EXISTS `recetas` (
  `idReceta` int(11) NOT NULL AUTO_INCREMENT,
  `nombreReceta` varchar(100) NOT NULL,
  `ingredientesReceta` varchar(1000) DEFAULT NULL,
  `preparacionReceta` varchar(1200) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idReceta`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recetas`
--

INSERT INTO `recetas` (`idReceta`, `nombreReceta`, `ingredientesReceta`, `preparacionReceta`, `image`) VALUES
(1, 'Bizcochuelo invertido de manzana, avena, coco, ricota y miel.', '300 gr copos de avena\r\n300 gr harina de garbanzos (o integral)\r\n300 gr ricota\r\n300 gr azúcar de mascabo\r\n2 manzanas grandes\r\n2 huevos\r\n3 cucharadas coco rallado\r\n4 cucharadas miel\r\n1 cucharada aceite\r\n1/2 taza leche descremada\r\n1 cucharada polvo de hornear\r\n1 cucharadita bicarbonato de sodio\r\n2 tapitas esencia de vainilla\r\nA gusto: chips/nueces/pasas, etc\r\n', '1- Precalentar el horno a 180 grados por 20 minutos. Durante el precalentado, colocar el molde dentro del horno con dos de las cucharadas de miel, tres de azúcar, y las manzanas cortadas bien finitas sobre esa mezcla.\r\n2- En un bowl colocar los huevos, la leche, las otras dos cucharadas de la miel y las otras dos del azúcar. Batir hasta integrar bien.\r\n3- Luego, colocar en el mismo bowl los ingredientes restantes y batir hasta integrarlos. Tiene que quedar una masa bien espesa.\r\n4- Cuando tengamos la mezcla, verterla en el mismo molde donde tenemos las manzanas y cocinar por 40 minutos aproximadamente a 180°.\r\n5-Listo! Ahora solo queda disfrutar este bizcochuelo, que, además de ser riquísimo, es muy sano y liviano. ', 'bizcochuelo.jpg'),
(2, 'Pancakes saludables', '1 banana\r\n1 huevo\r\n2 cucharadas soperas avena\r\n2 cucharadas soperas harina integral\r\n1 chorrito esencia de Vainilla\r\nToppings opcionales\r\nFruta cortadita\r\nMiel\r\nChips de chocolate\r\n', '1- Pisar la banana\r\n2- Agregar el huevo\r\n3- Agregar el avena, la harina integral y la vainilla\r\n4- Mezclar todo\r\n5- Llevar a una sartén antiadherente o colocar un chorrito de aceite o manteca y colocar por partes la mezcla, salen aproximadamente 3/4 pancakes\r\n6- Dar vuelta cuando se forman unas burbujitas y listo!!\r\n', 'pancakes.jpg'),
(3, 'Tarta saludable de brócoli y cebolla', '3 a 5 huevos\r\n1 brócoli\r\n1 cebolla\r\n1 cebollita de verdeo\r\n1/2 pimiento\r\n1 Tapa de tarta\r\na gusto Queso (opcional)sal, pimienta\r\n', '1- Separar el brócoli y ponerlo a hervir, hasta que esté cocido.\r\n2- Picar las cebollas y el pimiento; y la zanahoria rallada\r\n3- En una sartén u olla poner un poco de aceite con las cebollas y el pimiento. Una vez transparente la cebolla ponemos la zanahoria rallada. Agregar sal y un poquito de pimienta. Si gusta otros condimentos\r\n4- Una vez ya cocido el brócoli cortar en pedacitos como les guste.\r\n5- Mezclar el brócoli con los otros ingredientes y colocar la sal y la pimienta. Mezclar bien hasta que quede todo bien integrado.\r\n6- Cuando ya todos los ingredientes estén fríos le vamos a incorporar los huevos.(4 huevos). (Importante que este frío así no se cocina el huevo) y mezclar bien todo... y poner la mezcla sobre la tarta. Colocar pedacitos de brocoli para decorar y rallar un poco de queso.\r\n7- Y listo! Al horno a 220°C. ', 'tarta_brocoli.jpg'),
(4, 'Pan de carne saludable', '1 cebolla mediana\r\n2 huevos duros para el relleno\r\n1 cda aceite de girasol o de oliva\r\nSal y condimentos\r\n1 huevo para armar el pan\r\n300 gr carne picada vacuna (mejor si es desgrasada)\r\n1 diente ajo\r\n1 puñadito perejil\r\n1 ramita puerro\r\n1 ramita apio\r\n1 ramita cebolla de verdeo\r\n1/2 morrón chico\r\n1 zanahoria mediana rallada\r\n6 cdas salvado de avena o pan rallado\r\n100 gr muzzarella o queso cremoso\r\n4 fetas jamón cocido natural\r\nOPCIONAL 2 cditas de semillas hidratadas\r\nOPCIONAL: avena o semillas para espolvorear y decorar\r\n', '1- En una olla poner la cucharada de aceite y los siguientes vegetales picados: la cebolla, el morrón, el puerro, el apio, el ajo, la cebolla de verdeo y el perejil. Cocinar hasta que la cebolla quede transparente.\r\n2- En un bol colocar la carne picada, la zanahoria rallada, las semillas hidratadas, la preparación anterior, la sal y los condimentos. Ejemplo: pimentón, orégano, ají molido, pimienta y comino.\r\n3-Agregar un huevo y las cucharadas de salvado hasta formar una masa blanda. Si hace falta, agregar más cantidad.\r\n4- Aceitar una fuente, pizzera o bandeja para el horno. \r\nColocar la mitad de la masa en forma de rectángulo, con aproximadamente 2- 3 cm de espesor.\r\n5- Arriba del rectángulo colocar el relleno: las fetas de jamón, los 2 huevos duros (yo los corté a la mitad) y la muzzarella.\r\n6- Hacer una tapa con lo que queda de relleno y cubrir bien el relleno. Opcional: espolvorear avena o semillas arriba para decorar.\r\n7- Llevar al horno por 40 minutos. Ir verificando la cocción.\r\n8- Acompañar con la guarnición que quieras y disfrutar!\r\n', 'carne.jpg'),
(5, 'Medallones saludables de Avena y Verduras', 'Ingredientes(18 raciones)\r\n200 avena triturada\r\n3 rodajas zapallo anco\r\n1 zanahoria mediana\r\n1 lata de Arvejas\r\n1 lata de Lentejas\r\n1 huevo\r\nCondimentos a gusto\r\nPerejil a gusto\r\n', '1-Cortar el zapallo anco y la zanahoria en pequeños cuadrados y llevar a cocinar un rato, antes que estén cocidos retirar.\r\n2-Picar el perejil que vamos a agregar y reservar. En un bowl agregar la lata de arvejas y la de lentejas junto con todos los condimentos a gusto. Sal, orégano, semillas, perejil picado, ajo en polvo.\r\n3- Mixear el zapallo con la zanahoria un poquito y agregamos la mezcla anterior junto con el huevo y mixear apenas un poco más para que todo se integre.\r\n4- Una vez que tenemos todo listo pasar al bowl y agregar la avena, mezclar y formar los medallones. \r\n5- Se pueden hacer en sartén, horno, quedan súper sabrosos y te salvan el día! 🥰 Extra: pueden acompañar con queso gratinado por encima cuando lo preparan, o estilo napolitana con queso y salsa, riquísimo! 😍\r\n', 'medallones.jpg'),
(33, 'Pescado al horno mediterráneo', '2 filetes grandes de pescado (cualquier pescado firme, como el abadejo, por ejemplo) 1 cebolla 1 tomate 1 trozo de morrón rojo 1 trozo de morrón verde 1 diente de ajo Aceite de oliva Orégano Sal y pimienta 1 cda. de alcaparras Pimentón (dulce o picante) Para la guarnición: 2 papas chicas', '1. En una fuente de horno, poner en el fondo un chorro de aceite de oliva y, sobre éste, el pescado. Salpimentar.  2. Agregar la cebolla, cortada en rodajas o medias lunas. Que cubra todo el pescado.3. Agregar, de la misma manera, los morrones verdes y rojos, cortados en tiras finas.  4. Por último, poner el tomate, en rodajas, y el diente de ajo picado.  5. Volver a salpimentar y agregar orégano (solo un poco) y pimentón (dulce o picante, como te guste).  6. Bañar con un nuevo chorro de aceite de oliva y llevar a horno moderado por 20 minutos.  7. Retirar del horno y colocar las alcaparras encima, antes de servir.', '33.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
