
exports.up = function(knex) {
    return knex.schema
        .createTable('tenant', function(table) {
            table.increments().primary()
            table.string('tenant_name', 255)
            table.json('address')
            table.string('city', 255)
            table.string('state', 255)
            table.string('country', 255)
            table.string('zip_code', 255)
            table.string('phone', 255)
            table.string('web_url', 255)
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
        .createTable('User_Profile', function(table) {
            table.increments().primary()
            table.string('first_name', 255)
            table.string('last_name', 255)
            table.string('department', 255)
            table.string('designation', 255)
            table.string('image_url', 255)
            table.string('city', 255)
            table.string('country', 255)
            table.string('bio', 255)
            table.json('social_links')
            table.integer('employee_id', 255)
            table.timestamp('created_at').defaultTo(knex.fn.now())
            table.timestamp('updated_at').defaultTo(knex.fn.now())
            table
                .integer('tenant_id')
                .references('id')
                .inTable('tenant')
        })
}

exports.down = function(knex) {
    return knex.schema.dropTable('User_Profile').dropTable('tenant')
}