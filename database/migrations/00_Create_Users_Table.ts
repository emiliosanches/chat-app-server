import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('TBUsers', table => {
        table.string('username', 32).notNullable().primary();
        table.string('password', 128).notNullable();
        table.string('avatar_url').nullable();
        table.string('display_name').nullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('TBUsers')
}