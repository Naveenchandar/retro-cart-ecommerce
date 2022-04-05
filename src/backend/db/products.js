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
    rating: '3.5',
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Men's shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://5.imimg.com/data5/UR/JT/UX/SELLER-89993624/100-25-cotton-fancy-casual-shirt-for-men-500x500-500x500.jpg",
    description: "Full hand shirt",
    price: "200.00",
    oldPrice: "600.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 4,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Men's t-shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://images.meesho.com/images/products/9467959/0178a_512.jpg",
    description: "Full hand shirt",
    price: "700.00",
    oldPrice: "1000.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 4,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Men's t-shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://images.meesho.com/images/products/8066636/0f90d_512.jpg",
    description: "Full hand shirt",
    price: "400.00",
    oldPrice: "900.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 3,
    quantity: 1
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
    rating: 2,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Women's t-shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://images.meesho.com/images/products/42717826/jvz6v_512.jpg",
    description: "Full hand shirt",
    price: "100.00",
    oldPrice: "300.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 2,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Women's t-shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://images.meesho.com/images/products/42563262/qqfxh_512.jpg",
    description: "Full hand shirt",
    price: "100.00",
    oldPrice: "300.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 2,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Women's t-shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://images.meesho.com/images/products/76063243/p6p0t_512.jpg",
    description: "Full hand shirt",
    price: "100.00",
    oldPrice: "300.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 2,
    quantity: 1
  },
  {
    _id: uuid(),
    addedInYear: new Date().getFullYear(),
    type: "Men's shirt",
    productName: "Roadster",
    alt: "Roadster shirt",
    image: "https://images.meesho.com/images/products/13679817/c65fe_512.jpg",
    description: "Full hand shirt",
    price: "100.00",
    oldPrice: "300.00",
    inStock: true,
    discount: Math.floor(Math.random() * 100),
    rating: 2,
    quantity: 1
  }
];
