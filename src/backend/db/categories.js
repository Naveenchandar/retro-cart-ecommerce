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
    image: "https://retro-cart.netlify.app/assets/image_1.png"
  },
  {
    _id: uuid(),
    categoryName: "Men's t-shirt",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    image: "https://retro-cart.netlify.app/assets/image_1.png"
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
    image: "https://retro-cart.netlify.app/assets/image_1.png"
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    image: "https://retro-cart.netlify.app/assets/image_1.png"
  }
];
