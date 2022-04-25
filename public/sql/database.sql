CREATE TABLE IF NOT EXISTS products(
    Product_ID INT AUTO_INCREMENT NOT NULL, 
    Name VARCHAR(255), 
    Price FLOAT, 
    Quantity SMALLINT, 
    Type VARCHAR(255), 
    PRIMARY KEY (Product_ID)
);

CREATE TABLE IF NOT EXISTS descriptions(
    Description_ID INT AUTO_INCREMENT NOT NULL,
    Product_ID INT NOT NULL,
    Description VARCHAR(255),
    PRIMARY KEY (Description_ID)
);

CREATE TABLE IF NOT EXISTS pictures(
    Picture_ID INT AUTO_INCREMENT NOT Null,
    Product_ID INT NOT NULL,
    Picture BLOB NOT NULL,
    PRIMARY KEY (Picture_ID)
);

CREATE TABLE IF NOT EXISTS customers(
    Customer_ID INT AUTO_INCREMENT NOT NULL,
    Name VARCHAR(255),
    Street VARCHAR(255),
    Zipcode TINYINT,
    PRIMARY KEY (Customer_ID)
);

CREATE TABLE IF NOT EXISTS orders(
    Order_ID INT AUTO_INCREMENT NOT NULL,
    Customer_ID INT NOT NULL,
    DATE DATE,
    PRIMARY KEY (Order_ID)
);

CREATE TABLE IF NOT EXISTS ordered_items(
   OItem_ID INT AUTO_INCREMENT NOT NULL,
   Order_ID INT NOT NULL,
   Product_ID INT NOT NULL,
   Quantity SMALLINT, 
   Name VARCHAR(255),
   PRIMARY KEY (OItem_ID) 
);

CREATE TABLE IF NOT EXISTS profiles(
    Profile_ID INT AUTO_INCREMENT NOT NULL,
    Customer_ID INT NOT NULL,
    Username VARCHAR(20),
    Password VARCHAR(40),
    Role SET('user', 'connected_user', 'admin'),
    KLI BOOLEAN,
    PRIMARY KEY(Profile_ID)

);

CREATE TABLE IF NOT EXISTS reviews(
    Review_ID INT AUTO_INCREMENT NOT NULL,
    Profile_ID INT NOT NULL,
    Product_ID INT NOT NULL,
    Bought BOOLEAN,
    Review TEXT,
    Rating FLOAT,
    PRIMARY KEY (Review_ID)
);