CREATE TABLE users(
    id SERIAL,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    verify_token TEXT,
    token_expiry TIMESTAMP WITHOUT TIME ZONE,
    status TEXT DEFAULT 'Inactive'
);

CREATE TABLE projects(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    data JSON,
    last_modified_by INT REFERENCES users(id),
);

CREATE TABLE project_user_relation (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    project_id INT REFERENCES projects(id),
    role TEXT NOT NULL
);