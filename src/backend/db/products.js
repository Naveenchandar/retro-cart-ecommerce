import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Men's shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://retro-cart.netlify.app/assets/image_1.png",
    description: "Full hand shirt",
    price: "800.00",
    oldPrice: "1600.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: '3.5'
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Men's shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://retro-cart.netlify.app/assets/image_1.png",
    description: "Full hand shirt",
    price: "200.00",
    oldPrice: "600.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 4
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Men's t-shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://retro-cart.netlify.app/assets/image_1.png",
    description: "Full hand shirt",
    price: "700.00",
    oldPrice: "1000.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 4
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Men's t-shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://retro-cart.netlify.app/assets/image_1.png",
    description: "Full hand shirt",
    price: "400.00",
    oldPrice: "900.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 3
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Men's shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://retro-cart.netlify.app/assets/image_1.png",
    description: "Full hand shirt",
    price: "100.00",
    oldPrice: "300.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 2
  }
];
