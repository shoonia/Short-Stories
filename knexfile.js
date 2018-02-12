module.exports = {
    production: {
        client: 'mysql',
        connection: {
            host:     process.env.DB_HOST,
            database: process.env.DB_NAME,
            user:     process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            charset: 'utf8',
        },
        pool: {
            min: 0,
            max: 7,
            acquireConnectionTimeout: 30000,
            evictionRunIntervalMissis: 10000
        }
    }
};
