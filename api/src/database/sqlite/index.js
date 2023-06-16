const sqlite3 = require("sqlite3")
const sqlite = require("sqlite")
const path = require("path")

async function sqliteConnection() {
    const database = await sqlite.open({
        filename: path.resolve(__dirname, "..", "database.db"),
        driver: sqlite3.Database
    });
    return database
}

module.exports = sqliteConnection;


/*

CRUD

INSERT INTO users
(name, email, password)
VALUES
('Gustavo', 'gusta@email.com', '1234');

SELECT * FROM users;
SELECT id, name, email FROM users


UPDATE users SET
avatar = 'Alex.png',
name = 'Alexandre Ramos'
WHERE id = 1

DELETE FROM users
WHERE id = 3

*/