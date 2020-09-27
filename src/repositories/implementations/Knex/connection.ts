import path from 'path';
import _knex from 'knex';

export const knex = _knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, '..', '..', '..', '..', 'database', 'database.sqlite')
    },
    useNullAsDefault: true
});