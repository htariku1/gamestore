-- Drop existing tables if they exist
DROP TABLE IF EXISTS game;
DROP TABLE IF EXISTS console;
DROP TABLE IF EXISTS accessory;
DROP TABLE IF EXISTS invoice;
DROP TABLE IF EXISTS fee;
DROP TABLE IF EXISTS tax;

-- Game table
CREATE TABLE game (
    game_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    esrb_rating VARCHAR(50) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    studio VARCHAR(50) NOT NULL,
    quantity INT NOT NULL,
    category VARCHAR(50) NOT NULL
);

-- Console table
CREATE TABLE console (
    console_id INT PRIMARY KEY AUTO_INCREMENT,
    model VARCHAR(50) NOT NULL,
    manufacturer VARCHAR(50) NOT NULL,
    memory_amount VARCHAR(20),
    processor VARCHAR(20),
    price DECIMAL(5, 2) NOT NULL,
    quantity INT NOT NULL,
    category VARCHAR(50) NOT NULL
);

-- Accessory table
CREATE TABLE accessory (
    accessory_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    quantity INT NOT NULL,
    category VARCHAR(50) NOT NULL,
    sub_category VARCHAR(50) NOT NULL
);

-- Insert games by category
INSERT INTO game (title, esrb_rating, description, price, studio, quantity, category) VALUES
    ('Call of Duty Black Ops 6', 'M', 'First-person shooter game', 59.99, 'Activision', 100, 'Action'),
    ('Grand Theft Auto V', 'M', 'Open-world action-adventure game', 39.99, 'Rockstar Games', 150, 'Action'),
    ('The Legend of Zelda: Tears of the Kingdom', 'E', 'Adventure game', 59.99, 'Nintendo', 200, 'Adventure'),
    ('Elden Ring', 'M', 'Action role-playing game', 59.99, 'FromSoftware', 120, 'Adventure'),
    ('NBA 2K25', 'E', 'Basketball simulation game', 59.99, '2K Sports', 80, 'Sports'),
    ('Madden 25', 'E', 'American football simulation game', 59.99, 'EA Sports', 90, 'Sports'),
    ('Fifa 25', 'E', 'Football simulation game', 59.99, 'EA Sports', 110, 'Sports');

-- Insert consoles by category
INSERT INTO console (model, manufacturer, memory_amount, processor, price, quantity, category) VALUES
    ('PlayStation 5', 'Sony', '16GB GDDR6', 'Custom AMD Zen 2', 499.99, 50, 'PlayStation'),
    ('PlayStation 4', 'Sony', '8GB GDDR5', 'AMD Jaguar', 299.99, 60, 'PlayStation'),
    ('Xbox Series X', 'Microsoft', '16GB GDDR6', 'Custom AMD Zen 2', 499.99, 40, 'Xbox'),
    ('Xbox Series S', 'Microsoft', '10GB GDDR6', 'Custom AMD Zen 2', 299.99, 70, 'Xbox'),
    ('Nintendo Switch', 'Nintendo', '4GB LPDDR4', 'NVIDIA Custom Tegra', 299.99, 100, 'Nintendo'),
    ('Nintendo Switch – OLED Model', 'Nintendo', '4GB LPDDR4', 'NVIDIA Custom Tegra', 349.99, 80, 'Nintendo'),
    ('Nintendo Switch Lite', 'Nintendo', '4GB LPDDR4', 'NVIDIA Custom Tegra', 199.99, 90, 'Nintendo');

-- Insert accessories by sub-category
INSERT INTO accessory (name, description, price, quantity, category, sub_category) VALUES
    ('Nintendo The Legend of Zelda: The Wind Waker Korok T-Shirt', 'Comfortable cotton T-Shirt', 19.99, 200, 'Accessories', 'T-Shirts'),
    ('PlayStation Logo T-Shirt - BoxLunch Exclusive', 'Exclusive PlayStation logo T-Shirt', 24.99, 150, 'Accessories', 'T-Shirts'),
    ('Nintendo NES Controller Get Older Level Up T-Shirt', 'Retro NES controller T-Shirt', 22.99, 180, 'Accessories', 'T-Shirts'),
    ('Apple AirPods Max', 'High-fidelity wireless noise-cancelling headphones', 549.99, 50, 'Accessories', 'Headsets'),
    ('Bose QuietComfort Ultra Headphones', 'Noise-cancelling over-ear headphones', 379.00, 60, 'Accessories', 'Headsets'),
    ('SanDisk USB Type-C Dual Drive, 512 GB, Black', 'High-speed USB Type-C storage', 89.99, 120, 'Accessories', 'Storage'),
    ('Seagate One Touch SSD 2TB External SSD Portable', 'Fast external SSD storage', 199.99, 80, 'Accessories', 'Storage');

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create user_roles table
CREATE TABLE IF NOT EXISTS user_roles (
    user_id INT NOT NULL,
    role VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Optionally, insert an admin user
INSERT INTO users (username, password) VALUES ('admin', '$2a$10$hashedPassword'); -- Use bcrypt hashed password
INSERT INTO user_roles (user_id, role) VALUES (1, 'ADMIN');