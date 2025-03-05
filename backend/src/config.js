// process.loadEnvFile('../../.env'): Carga el archivo .env desde el directorio raíz , si el archivo .env se encontrara en el directorio server, no es necesario especificar el path
//Nota: utilizar solo cuando trabajes en local, en producción no es necesario

export const dbConfig = {
    MYSQLDB_HOST: process.env.MYSQLDB_HOST || (() => { throw new Error('Host required') })(),
    MYSQLDB_DOCKER_PORT: process.env.MYSQLDB_DOCKER_PORT || (() => { throw new Error('Port required') })(),
    MYSQLDB_USER: process.env.MYSQLDB_USER || (() => { throw new Error('User required') })(),
    MYSQLDB_PASSWORD: process.env.MYSQLDB_PASSWORD || (() => { throw new Error('Password required') })(),
    MYSQLDB_DATABASE: process.env.MYSQLDB_DATABASE || (() => { throw new Error('Database required') })()
};

export const nodeConfig = {
    NODE_DOCKER_PORT: process.env.NODE_DOCKER_PORT || (() => { throw new Error('Port required') })()
};