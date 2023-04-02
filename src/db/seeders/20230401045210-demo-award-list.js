'use strict';

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
    await queryInterface.bulkInsert('Awards', [{
      type: 'Vouchers',
      point: 1000,
      name: 'First Award Voucher',
      image: '/public/voucher-first.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      type: 'Vouchers',
      point: 2000,
      name: 'Second Award Voucher',
      image: '/public/voucher-second.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      type: 'Vouchers',
      point: 3000,
      name: 'Third Award Voucher',
      image: '/public/voucher-third.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      type: 'Products',
      point: 1000,
      name: 'First Award Product',
      image: '/public/prodcut-first.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      type: 'Products',
      point: 2000,
      name: 'Second Award Product',
      image: '/public/product-second.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      type: 'Products',
      point: 3000,
      name: 'Third Award Product',
      image: '/public/product-third.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      type: 'Giftcard',
      point: 1000,
      name: 'First Award Gitfcard',
      image: '/public/giftcard-first.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      type: 'Giftcard',
      point: 2000,
      name: 'Second Award Giftcard',
      image: '/public/giftcard-second.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      type: 'Giftcard',
      point: 3000,
      name: 'Third Award Giftcard',
      image: '/public/giftcard-third.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Awards', null, {});
  }
};
