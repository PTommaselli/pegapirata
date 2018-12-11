CREATE DATABASE pegapirata;

USE pegapirata;

CREATE TABLE Usuarios (id_usuario INTEGER AUTO_INCREMENT PRIMARY KEY, nome_usuario TEXT, senha_usuario CHAR(8), email_usuario TEXT, foto_usuario TEXT);
INSERT INTO Usuarios VALUES(0, 'NycolasSF', 'senhanycolas', 'nycolassilvafroes@gmail.com', 'img/foto.png');
INSERT INTO Usuarios VALUES(0, 'Pedro', 'senhapedro', 'pedro@gmail.com', 'img/foto.png');
INSERT INTO Usuarios VALUES(0, 'Camila', 'senhacamila', 'camila@gmail.com', 'img/foto.png');
INSERT INTO Usuarios VALUES(0, 'Jualiane', 'senhajualiane', 'jualiane@gmail.com', 'img/foto.png');

CREATE TABLE Registros (id_registro INTEGER AUTO_INCREMENT PRIMARY KEY, nome_registro TEXT, tipo_registro TEXT, data_registro DATE, dataOcorrencia_registro TEXT, documento_registro TEXT, latitude TEXT, longitude TEXT, latitudeDelta TEXT, longitudeDelta TEXT, Usuarios_id_usuario INTEGER, FOREIGN KEY(Usuarios_id_usuario) REFERENCES Usuarios(id_usuario));
INSERT INTO Registros VALUES(0, 'Roubo de Celular', 'Roubo', now(), '12/12/2012', 'img/boletimOcorrencia.png', '37.78825', '-122.4324', '0.0922', '0.0421', 1);
INSERT INTO Registros VALUES(0, 'Roubo de Carteira', 'Roubo', now(), '12/12/2017', 'img/boletimOcorrencia.png', '37.78825', '-122.4324', '0.0922', '0.0421', 2);
INSERT INTO Registros VALUES(0, 'Morte do Cachorro', 'Assassinato', now(), '12/12/2020', 'img/boletimOcorrencia.png', '37.78825', '-122.4324', '0.0922', '0.0421', 3);
INSERT INTO Registros VALUES(0, 'Morte de Celular', 'Assassinato', now(), '12/12/2018', 'img/boletimOcorrencia.png', '37.78825', '-122.4324', '0.0922', '0.0421', 4);
