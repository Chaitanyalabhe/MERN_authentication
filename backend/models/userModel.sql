-- Active: 1735220951238@@127.0.0.1@3306@project_db

 CREATE DATABASE project_db
 USE project_db
 CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,           -- User ID (Primary Key, Auto Incremented)
  firstName VARCHAR(255) NOT NULL,             -- User's first name (cannot be NULL)
  lastName VARCHAR(255) NOT NULL,              -- User's last name (cannot be NULL)
  mobileNumber VARCHAR(15) UNIQUE NOT NULL,    -- User's mobile number (must be unique and cannot be NULL)
  password VARCHAR(255) NOT NULL,              -- User's password (hashed password)
  createdDate DATETIME DEFAULT CURRENT_TIMESTAMP, -- Timestamp for when the record is created (defaults to current timestamp)
  updatedDate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP  -- Timestamp for when the record is last updated (auto-updates)
);

SHOW TABLES;
DESCRIBE users;
INSERT INTO users (firstName, lastName, mobileNumber, password) 
VALUES ('John', 'Doe', '9561594710', 'hashed_password_123');

SELECT * FROM users;

DELIMITER $$

CREATE PROCEDURE InsertUser(
    IN p_firstName VARCHAR(255),
    IN p_lastName VARCHAR(255),
    IN p_mobileNumber VARCHAR(15),
    IN p_password VARCHAR(255)
)
BEGIN
    INSERT INTO users (firstName, lastName, mobileNumber, password)
    VALUES (p_firstName, p_lastName, p_mobileNumber, p_password);
END $$

DELIMITER ;