'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Photos", [
      {
        title: "Photo 1.1",
        caption: "Caption photo 1",
        image_url: "https://picsum.photos/id/1/200/300",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      },
      {
        title: "Photo 2.1",
        caption: "Caption photo 2",
        image_url: "https://picsum.photos/id/2/200/300",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      },
      {
        title: "Photo 3.1",
        caption: "Caption photo 3",
        image_url: "https://picsum.photos/id/2/200/300",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: 2
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Photos", null, {})

  }
};
