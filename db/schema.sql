DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
id INTEGER(10) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT false,
date TIMESTAMP  DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Cheeseburger",false), ("Veggie Burger",true), ("Chicken Burger",false);

SELECT * FROM burgers;