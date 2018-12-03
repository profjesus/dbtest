const knex = require('knex')(require('./knexfile'))

module.exports = {
  createProduct ({ name, section }) {
    console.log(`Add product ${name} in section ${section}`);
    // return Promise.resolve();
    return knex('products').insert({
      name,
      section
    })
  },
  getProducts () {
    console.log("Querying products...");
    return knex('products').select();
  }
}
