CREATE DATABASE pegapirata;

USE pegapirata;

CREATE TABLE Usuarios (id_usuario INTEGER AUTO_INCREMENT PRIMARY KEY, nome_usuario TEXT, senha_usuario CHAR(8), email_usuario TEXT, foto_usuario TEXT);
INSERT INTO Usuarios VALUES(0, 'NycolasSF', 'senhanycolas', 'nycolassilvafroes@gmail.com', 'img/foto.png');
INSERT INTO Usuarios VALUES(0, 'Pedro', 'senhapedro', 'pedro@gmail.com', 'img/foto.png');
INSERT INTO Usuarios VALUES(0, 'Camila', 'senhacamila', 'camila@gmail.com', 'img/foto.png');
INSERT INTO Usuarios VALUES(0, 'Jualiane', 'senhajualiane', 'jualiane@gmail.com', 'img/foto.png');

CREATE TABLE Registros (id_registro INTEGER AUTO_INCREMENT PRIMARY KEY, nome_registro TEXT, tipo_registro TEXT, data_registro DATE, dataOcorrencia_registro TEXT, documento_registro TEXT, latitude TEXT, longitude TEXT, Usuarios_id_usuario INTEGER, FOREIGN KEY(Usuarios_id_usuario) REFERENCES Usuarios(id_usuario));
INSERT INTO Registros VALUES(0, 'Roubo de Celular', 'Roubo', now(), '12/12/2012', 'img/boletimOcorrencia.png', '-22.215718', '-54.822197', 1);
INSERT INTO Registros VALUES(0, 'Roubo de Carteira', 'Roubo', now(), '12/12/2017', 'img/boletimOcorrencia.png', '-22.214645', '-54.796406', 2);
INSERT INTO Registros VALUES(0, 'Morte do Cachorro', 'Assassinato', now(), '12/12/2020', 'img/boletimOcorrencia.png', '-22.225451', '-54.798250', 3);
INSERT INTO Registros VALUES(0, 'Morte de Celular', 'Assassinato', now(), '12/12/2018', 'img/boletimOcorrencia.png', '-22.209957', '-54.802672', 4);

ALTER TABLE registros add COLUMN desc_registro TEXT;
UPDATE registros SET desc_registro = 'Perdi meu celular' WHERE id_registro < 2 ;
UPDATE registros SET desc_registro = 'I morreu' WHERE id_registro > 2;
