-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Feb 26. 13:31
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
-- Adatbázis: `katica`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `forgalom`
--

CREATE TABLE `forgalom` (
  `id` int(11) NOT NULL,
  `termek` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `vevo` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `kategoriaId` int(11) DEFAULT NULL,
  `egyseg` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `nettoar` int(11) DEFAULT NULL,
  `mennyiseg` int(11) DEFAULT NULL,
  `kiadva` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `forgalom`
--

INSERT INTO `forgalom` (`id`, `termek`, `vevo`, `kategoriaId`, `egyseg`, `nettoar`, `mennyiseg`, `kiadva`) VALUES
(246, 'Sajtos hot-dog', 'Lajos', 1, 'db', 450, 2, 1),
(247, 'Limonádé', 'Lajos', 2, 'dl', 100, 5, 1),
(248, 'Gyros tál', 'Kinga', 1, 'db', 1500, 1, 1),
(249, 'Ízes palacsinta', 'Kinga', 1, 'db', 350, 2, 1),
(250, 'Túros palacsinta', 'Kinga', 1, 'db', 270, 1, 1),
(251, 'Narancslé', 'Kinga', 2, 'dl', 150, 3, 1),
(252, 'Főtt virsli', 'Jenő', 1, 'pár', 450, 2, 0),
(253, 'Kenyér', 'Jenő', 1, 'szelet', 60, 2, 1),
(254, 'Gyros tál', 'Ági', 1, 'db', 1500, 3, 0),
(255, 'Málnaszörp', 'Ági', 2, 'dl', 100, 10, 0),
(256, 'Sajtos hot-dog', 'Lajos', 2, 'db', 450, 2, 0),
(257, 'Málnaszörp', 'Lajos', 2, 'dl', 100, 3, 0),
(258, 'Gyros tál', 'Jenő', 1, 'db', 1500, 1, 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `kategoria`
--

CREATE TABLE `kategoria` (
  `id` int(11) NOT NULL,
  `kategoriaNev` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `kategoria`
--

INSERT INTO `kategoria` (`id`, `kategoriaNev`) VALUES
(1, 'Ételek'),
(2, 'Italok'),
(3, 'Ajándéktárgyak');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `forgalom`
--
ALTER TABLE `forgalom`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kategoriaId` (`kategoriaId`);

--
-- A tábla indexei `kategoria`
--
ALTER TABLE `kategoria`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `kategoria`
--
ALTER TABLE `kategoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `forgalom`
--
ALTER TABLE `forgalom`
  ADD CONSTRAINT `forgalom_ibfk_1` FOREIGN KEY (`kategoriaId`) REFERENCES `kategoria` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
