CREATE TABLE users(
    id        VARCHAR PRIMARY KEY,
    firstName VARCHAR NOT NULL,
    lastName  VARCHAR NOT NULL,
    password  VARCHAR NOT NULL,    
    email     VARCHAR UNIQUE,
    userName  VARCHAR UNIQUE
);

CREATE TABLE posts(
    id        VARCHAR PRIMARY KEY,
    title     VARCHAR NOT NULL,
    url       VARCHAR UNIQUE NOT NULL,
    userId    VARCHAR NOT NULL,
    postedAt  INTEGER NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(id) 
);