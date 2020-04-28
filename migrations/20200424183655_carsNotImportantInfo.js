
exports.up = async function(knex) {
  await knex.schema.alterTable("cars", (table) => {
      table.boolean("clean").defaultTo(false)
      table.boolean("salvage").defaultTo(false)
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable("cars", (table) => {
      table.dropColumn("clean")
      table.dropColumn("salvage")
  })
};
