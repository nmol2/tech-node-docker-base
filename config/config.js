require("dotenv").config()

const DatabaseConfig = {
    host: process.env['AN_DB_HOST'],
    database: process.env['AN_DB_DATABASE'],
    username: process.env['AN_DB_USERNAME'],
    password: process.env['AN_DB_PASSWORD'],
}

const AppConfig = {
    port: process.env['AN_PORT']
}
module.exports = {
    DatabaseConfig,
    AppConfig
}