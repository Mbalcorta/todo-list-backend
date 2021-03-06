DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS taskBox CASCADE;

CREATE TABLE taskBox (
  id SERIAL PRIMARY KEY,
  list_name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS users_taskBox CASCADE;

CREATE TABLE users_taskBox (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) NOT NULL,
  taskBox_id INTEGER REFERENCES taskBox(id) NOT NULL
);

DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL,
  complete VARCHAR(255) DEFAULT 'false'
);

DROP TABLE IF EXISTS taskBox_tasks CASCADE;

CREATE TABLE taskBox_tasks (
  id SERIAL PRIMARY KEY,
  taskBox_id INTEGER REFERENCES taskBox(id) NOT NULL,
  tasks_id INTEGER REFERENCES tasks(id) NOT NULL
);