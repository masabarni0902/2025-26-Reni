-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Feb 26. 14:17
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `vizilabda`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kapitany`
--

CREATE TABLE `kapitany` (
  `id` int(2) NOT NULL DEFAULT 0,
  `neve` varchar(18) DEFAULT NULL,
  `szuletett` int(4) DEFAULT NULL,
  `meghalt` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- A tábla adatainak kiíratása `kapitany`
--

INSERT INTO `kapitany` (`id`, `neve`, `szuletett`, `meghalt`) VALUES
(1, 'Speisegger Ernő', 1884, 1948),
(2, 'Beleznay László', 1891, 1953),
(3, 'Komjádi Béla', 1892, 1933),
(4, 'Ivády Sándor', 1903, 1998),
(5, 'Németh János', 1906, 1988),
(6, 'Sárkány Miklós', 1908, 1998),
(7, 'Rajki Béla', 1909, 2000),
(8, 'Laky Károly', 1912, 2000),
(9, 'Lemhényi Dezső', 1917, 2003),
(10, 'Gyarmati Dezső', 1927, 2013),
(11, 'Markovits Kálmán', 1931, 2009),
(12, 'Mayer Mihály', 1933, 2000),
(13, 'Rusorán Péter', 1940, 2012),
(14, 'Konrád János', 1941, 2014),
(15, 'Kásás Zoltán', 1946, 0),
(16, 'Horkai György', 1954, 0),
(17, 'Kemény Dénes', 1954, 0),
(18, 'Benedek Tibor', 1972, 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `kapitany`
--
ALTER TABLE `kapitany`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
