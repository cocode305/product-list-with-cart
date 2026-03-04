const productContainer = document.querySelector('.product-container');
const quantity = document.querySelector('.cart-quantity');


let products = [
  {
    id: 1,
    name: "waffle with Berries",
    category: "waffle",
    image: "image-waffle-desktop.jpg",
    price: 6.5,
  },

  {
    id: 2,
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    image: "image-creme-brulee-desktop.jpg",
    price: 7.0,
  },

  {
    id: 3,
    name: "Macaron Mix of Five",
    category: "Macaron",
    image: "image-macaron-desktop.jpg",
    price: 8.0,
  },

  {
    id: 4,
    name: "Classic Tiramisu",
    category: "Tiramisu",
    image: "image-tiramisu-desktop.jpg",
    price: 5.5,
  },

  {
    id: 5,
    name: "Pistachio Baklava",
    category: "Baklava",
    image: "image-baklava-desktop.jpg",
    price: 4.0,
  },

  {
    id: 6,
    name: "Lemon Meringue Pie",
    category: "Pie",
    image: "image-meringue-desktop.jpg",
    price: 5.0,
  },

  {
    id: 7,
    name: "Red Velvet Cake",
    category: "Cake",
    image: "image-cake-desktop.jpg",
    price: 4.5,
  },

  {
    id: 8,
    name: "Salted Caramel Brownie",
    category: "Brownie",
    image: "image-brownie-desktop.jpg",
    price: 5.5,
  },

  {
    id: 9,
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    image: "image-panna-cotta-desktop.jpg",
    price: 6.50,
  },
];
let cartLists = [];

// Display Product Cards
function displayProduct() {
    products.forEach((value, key) => {
        let productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
        <div class="product-display">
        <img src="assets/images/${value.image}" alt="" class="product-img">

        <div class="cart-control">
          <button class="addToCart-btn" onClick(addToCart(${key}))><img src="assets/images/icon-add-to-cart.svg" alt="Add to Cart icon">Add to Cart</button>

          <div class="counter hidden">
            <!-- Minus Button -->
            <button class="counter-btn minus"><i class="fa-solid fa-minus"></i></button>
            <!-- Counter -->
            <span class="count">0</span>
            <!-- Plus Button -->
            <button class="counter-btn plus"><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>
      </div>
      
      <div class="product-details">
        <h4 class="product-category">${value.category}</h4>
        <h2 class="product-name">${value.name}</h2>
        <h3 class="product-price">$${value.price}</h3>
      </div>
        `;
        productContainer.append(productItem);
    });
}
displayProduct();

// Add to Cart Function
function addToCart(key) {

}
