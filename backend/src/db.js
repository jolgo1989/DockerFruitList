import { createPool } from 'mysql2/promise';
import { dbConfig } from './config.js';
// Create the connection pool. The pool-specific settings are the defaults
export const pool = createPool({
    host: dbConfig.MYSQLDB_HOST,
    user: dbConfig.MYSQLDB_USER,
    database: dbConfig.MYSQLDB_DATABASE,
    password: dbConfig.MYSQLDB_PASSWORD,
    port: dbConfig.MYSQLDB_DOCKER_PORT,
});

