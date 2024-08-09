import { faker } from "@faker-js/faker";

const CATEGORIES = [
  // "Computer",
  // "Camera",
  // "Phone",
  // "GamePad",
  // "HeadPhone",
  // "SmartWatch",
  // "Shoes",
  // "Clothes",
  // "NewArrival",
  // "FashionAccessories",
  // "MenBags",
  "Fashion",
  "Gadgets",
];

const S = ["draft", "published", "unpublished"];
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
    // for (let index = 0; index < 50; index++) {
    //   strapi.entityService.create("api::inventory.inventory", {
    //     data: {
    //       productName: faker.commerce.productName(),
    //       sellingPrice: faker.number.float({ max: 200, min: 10 }),
    //       costPrice: faker.number.float({ max: 200, min: 10 }),
    //       quantity: faker.number.int({ max: 200, min: 10 }),
    //       description: faker.commerce.productDescription(),
    //       discountValue: faker.number.int({ max: 6, min: 0 }),
    //       category: CATEGORIES[faker.number.int({ max: 1, min: 0 })],
    //       orderType: "standard",
    //       expiryDate: faker.date.soon().toUTCString(),
    //       status: S[faker.number.int({ max: 2, min: 0 })],
    //       discountType: "free",
    //       policySwitch: faker.number.int({ max: 10, min: 3 }) > 5,
    //       expirySwitch: faker.number.int({ max: 10, min: 3 }) > 5,
    //       discountSwitch: faker.number.int({ max: 10, min: 3 }) > 5,
    //     },
    //   });
    // }
  },
};
