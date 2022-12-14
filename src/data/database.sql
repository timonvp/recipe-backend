DROP DATABASE IF EXISTS `recipe-database`;
CREATE DATABASE `recipe-database`;
USE `recipe-database`;


DROP TABLE IF EXISTS `recipe`;
CREATE TABLE `recipe` (
    `id` char(36) NOT NULL,
    `userid` char (36) NOT NULL,
    `name` char(255) NOT NULL,
    `preparation` text NOT NULL,
    `duration` int NOT NULL,
    `people` int NOT NULL,
    `ingredients` json,
    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `id` char(36) NOT NULL,
    `username` char(255) NOT NULL,
    `password` char(255) NOT NULL,
    PRIMARY KEY (`id`)
);



INSERT INTO `recipe` VALUES
    ('c7ceb7a8-4b9e-41b4-b248-0684f871c338', '099a857f-e9e9-4503-b93f-5898a1d39907', 'Croques met truffelmayonaise', 'Beleg twee sneetjes toastbrood met een plakje kaas en een plakje ham. Leg er opnieuw twee sneetjes toastbrood bovenop. Toast de croques goudbruin en krokant in de oven of in een croquemachine. Serveer met truffelmayonaise.', 10, 1, '[{"name":"toastbrood","unit":"sneetjes","amount":4},{"name":"hesp","unit":"plakjes","amount":2},{"name":"kaas","unit":"plakjes","amount":2},{"name":"truffelmayonaise","unit":"el","amount":1}]'),
    ('6150b0eb-db0d-46ad-b9aa-48e49d952041', '099a857f-e9e9-4503-b93f-5898a1d39907', 'Crème brulée', 'Roer de suiker onder de eigelen. Voeg hier de volle melk en de room aan toe. Schraap de zaadjes uit de vanillestok en voeg bij het mengsel. Laat een uurtje rusten in de koelkast. Doe het mengsel in vuurvaste schaaltjes en bak de crème brulée af gedurende 1 uur en 15 minuten in een voorverwarmde oven van 95 graden. Haal ze uit de oven en laat ze afkoelen. Bestrooi de crème brulées met fijne suiker en karamelliseer de suiker met een brander.', 120, 6, '[{"name":"eigelen","unit":"","amount":10},{"name":"suiker","unit":"gr","amount":200},{"name":"volle melk","unit":"dl","amount":3},{"name":"volle room","unit":"dl","amount":9},{"name":"vanillestok","unit":"","amount":1}]'),
    ('1449e371-854f-43ce-98f2-f76669bef727', '099a857f-e9e9-4503-b93f-5898a1d39907', 'Zalm en croûte', 'Doe voor de vulling de ricotta, de pijnboompitten, knoflook, olijfolie, basilicum, dille en citroenzeste in de foodprocessor. Pureer tot een mooie crème. Breng het geheel op smaak met peper en zout. Verwarm de oven voor op 180°C. Neem een vel filodeeg. Vouw het dubbel en leg het met de lange zijde verticaal voor je. Smeer volledig in met een dun laagje gesmolten boter. Leg er een tweede vel dubbelgevouwen filodeeg over en bestrijk met boter. Doe dit ook met het derde vel. Bestrijk dan het filodeeg volledig met ricottavulling en leg daarop aan de bovenkant een stuk zalm. Rol het filodeeg voorzichtig op vanaf de kant waar je de zalm hebt gelegd. Vouw de zijkanten nonchalant naar binnen zoals een pakketje. Smeer de buitenkant in met gesmolten boter en leg de zalm en croûte op een bakplaat bekleed met bakpapier. Maak nu de tweede portie. Bak de zalm en croûte 30-35 minuten in de oven.', 60, 2, '[{"name":"ricotta","unit":"gr","amount":180},{"name":"pijnboompitten","unit":"gr","amount":50},{"name":"knoflook","unit":"tenen","amount":2},{"name":"olijfolie","unit":"el","amount":1},{"name":"basilicum","unit":"blaadjes","amount":10},{"name":"dille","unit":"takjes","amount":4},{"name":"citroen","unit":"","amount":1},{"name":"filodeeg","unit":"vellen","amount":6},{"name":"gesmolten boter","unit":"gr","amount":30},{"name":"zalmfilet","unit":"gr","amount":500}]');

INSERT INTO `user` VALUES
    ('099a857f-e9e9-4503-b93f-5898a1d39907', 'Timon', '$argon2id$v=19$m=131072,t=6,p=1$85lpFCIgWjwNcG+gzBb0Pg$LjgOIxurkfDtP2yzb6THv2oog4lM4YnJGqQJTOf8ynA');

