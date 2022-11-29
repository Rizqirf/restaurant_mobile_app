"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const data = require("../restaurant.json");
    data.Items.forEach((el) => {
      delete el.id;
      el.description =
        "In sollicitudin tortor sit amet massa facilisis porttitor. Vivamus vulputate, odio sit amet facilisis placerat, est dolor luctus erat, a ornare enim elit sed felis. Maecenas dui ex, varius vel euismod a, volutpat eu quam. Nulla ullamcorper elementum mauris non vehicula. Sed accumsan sollicitudin ligula a vulputate. Maecenas sodales enim sodales turpis consequat, ut ultrices tortor lacinia. Sed nunc lorem, interdum in felis vitae, volutpat feugiat tellus.";
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert("Items", data.Items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Items", null, {});
  },
};
