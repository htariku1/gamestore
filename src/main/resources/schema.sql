-- Drop existing tables if they exist
DROP TABLE IF EXISTS game;
DROP TABLE IF EXISTS console;
DROP TABLE IF EXISTS tshirt;
DROP TABLE IF EXISTS invoice;
DROP TABLE IF EXISTS fee;
DROP TABLE IF EXISTS tax;

-- Create the game table
CREATE TABLE game (
    game_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    esrb_rating VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    studio VARCHAR(50) NOT NULL,
    quantity INT
);

-- Create the console table
CREATE TABLE console (
    console_id INT PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(50) NOT NULL,
    manufacturer VARCHAR(50) NOT NULL,
    memory_amount VARCHAR(20),
    processor VARCHAR(20),
    price DECIMAL(5, 2) NOT NULL,
    quantity INT NOT NULL
);

-- Create the tshirt table
CREATE TABLE tshirt (
    tshirt_id INT PRIMARY KEY AUTO_INCREMENT,
    size VARCHAR(20) NOT NULL,
    color VARCHAR(20) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    quantity INT NOT NULL
);

-- Create the invoice table
CREATE TABLE invoice (
    invoice_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    street VARCHAR(100),
    city VARCHAR(50) NOT NULL,
    state VARCHAR(20) NOT NULL,
    zipcode VARCHAR(10),
    item_type VARCHAR(50) NOT NULL,
    item_id INT NOT NULL, -- links to either game, console, or t_shirt ids
    unit_price DECIMAL(8, 2) NOT NULL,
    quantity INT NOT NULL,
    subtotal DECIMAL(8, 2) NOT NULL,
    tax DECIMAL(8, 2) NOT NULL,
    processing_fee DECIMAL(8, 2) NOT NULL,
    total DECIMAL(8, 2) NOT NULL
);

-- Create the fee table
CREATE TABLE fee (
    product_type VARCHAR(50) PRIMARY KEY,
    fee DECIMAL(8, 2) NOT NULL
);

-- Create the tax table
CREATE TABLE tax (
    state CHAR(2) PRIMARY KEY,
    rate DECIMAL(8, 2) NOT NULL
);
