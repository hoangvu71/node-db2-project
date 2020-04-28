
exports.seed = async function(knex) {
  await knex("cars").truncate()

  await knex("cars").insert([
    {VIN: "123456789", make: "MAZDA", model: "CX-5", mileage: "14444", clean: true, salvage: true}
  ])

};
