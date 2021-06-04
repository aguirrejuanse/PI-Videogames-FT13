require('dotenv').config();

module.exports = {
    dbUser: process.env.DB_USER || "postgres",
    dbPassword: process.env.DB_PASSWORD || "juanse",
    dbHost: process.env.DB_HOST || "localhost",
    apiKey: process.env.API_KEY,
    PORT: process.env.PORT || '3001',
    dbPort: process.env.DB_PORT || "5432"
}