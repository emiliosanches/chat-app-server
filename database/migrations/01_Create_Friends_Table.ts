import Knex from "knex";

export async function up(knex: Knex) {
    return knex.schema.createTable('TBFriends', table => {
        table.increments('id').notNullable().primary();
        table.boolean('accepted').notNullable();

        table.string('user1')
            .notNullable()
            .references('username')
            .inTable('TBUsers')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        
        
        table.string('user2')
            .notNullable()
            .references('username')
            .inTable('TBUsers')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('TBFriends')
}