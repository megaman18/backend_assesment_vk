// Update with your config settings.

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            host: "postgres",
            database: 'postgres',
            user: 'postgres',
            password: 'postgres'
        },
        searchPath: ['knex', 'public'],
        debug:true,
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: './database/migrations',
            tableName: 'knex_migrations'
        },
        seeds: {
            directory: './seeds',
        },

    }

};
