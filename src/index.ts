// import { faker } from "@faker-js/faker";

// const CATEGORIES = [
//   "Computer",
//   "Camera",
//   "Phone",
//   "GamePad",
//   "HeadPhone",
//   "SmartWatch",
//   "Shoes",
//   "Clothes",
//   // "NewArrival",
//   "FashionAccessories",
//   "MenBags",
// ];

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    // for (let index = 0; index < 500; index++) {
    //   strapi.entityService.create("api::product.product", {
    //     data: {
    //       name: faker.commerce.productName(),
    //       price: faker.number.float({ max: 200, min: 10 }),
    //       quantity: faker.number.int({ max: 200, min: 10 }),
    //       description: faker.commerce.productDescription(),
    //       discount: faker.number.int({ max: 6, min: 0 }),
    //       category: CATEGORIES[Math.floor(Math.random() * 10)],
    //     },
    //   });
    // }
  },
};
