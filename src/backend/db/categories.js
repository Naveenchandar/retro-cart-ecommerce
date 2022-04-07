import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men's shirt",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    image: "https://5.imimg.com/data5/UR/JT/UX/SELLER-89993624/100-25-cotton-fancy-casual-shirt-for-men-500x500-500x500.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Men's t-shirt",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: "https://images.meesho.com/images/products/8066636/0f90d_512.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Women's shirt",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: "https://retro-cart.netlify.app/assets/image_1.png"
  },
  {
    _id: uuid(),
    categoryName: "Women's t-shirt",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: "https://images.meesho.com/images/products/42717826/jvz6v_512.jpg"
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: "https://cdn.shopify.com/s/files/1/0584/2770/3448/collections/Catlog-Girls-Kids-wear.jpg?v=1637756504"
  }
];
