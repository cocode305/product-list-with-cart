const productContainer = document.querySelector('.product-container');
const cartQuantity = document.querySelector('.cart-quantity');
const cartList = document.querySelector('.cart-list');


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
let cartItems = {};

// Display Product Cards using self-invoking function
function renderProduct() {
  products.forEach((product, key) => {
    let productItem = document.createElement('div');
    productItem.setAttribute('data-product-id',`${key}`);
    productItem.classList.add('product-item');
    productItem.innerHTML = `
    <div class="product-display">
    <img src="assets/images/${product.image}" alt="" class="product-img">

    <div class="cart-control">
      <button class="addToCart-btn"><img src="assets/images/icon-add-to-cart.svg" alt="Add to Cart icon">Add to Cart</button>

      <div class="item-counter hidden">
        <!-- Minus Button -->
        <button class="reduce-item item-counter-btn minus-btn"><i class="fa-solid fa-minus"></i></button>
        <!-- Counter -->
        <span class="item-count">0</span>
        <!-- Plus Button -->
        <button class="increase-item item-counter-btn plus-btn"><i class="fa-solid fa-plus"></i></button>
      </div>
    </div>
  </div>
  
  <div class="product-details">
    <h4 class="product-category">${product.category}</h4>
    <h2 class="product-name">${product.name}</h2>
    <h3 class="product-price">$${product.price.toFixed(2)}</h3>
  </div>
  `;
  
  productContainer.append(productItem);
    
  });
}
renderProduct();

productContainer.addEventListener('click', (e) => {
  // Update cart state
  const productCard = e.target.closest('.product-item');
  const productId = productCard.dataset.productId;

  if (e.target.closest('.addToCart-btn')) {
    updateCart(productId, 1)
  }
  
  // Plus button
  if (e.target.closest('.plus-btn')) {
    updateCart(productId, 1);
  }
  
  // Minus button
  if (e.target.closest('.minus-btn')) {
    updateCart(productId, -1);
  }

  displayCartItem(productCard);
});

function updateCart(productId, change) {
  // Maintains current state for unclicked product cards
  if (!cartItems[productId]) {
    cartItems[productId] = {quantity: 0}
  }
  // Changes the state of clicked product
  cartItems[productId].quantity += change;

  // Delete cart item if quantity is zero
  if (cartItems[productId].quantity <= 0) {
    delete cartItems[productId];
  }
}



function displayCartItem(productCard) {
  const productId = productCard.dataset.productId;
  const quantity = cartItems[productId]?.quantity || 0

  const addToCart = productCard.querySelector('.addToCart-btn');
  const counter = productCard.querySelector('.item-counter');
  const countDisplay = productCard.querySelector('.item-count');

  if (quantity > 0) {
    addToCart.classList.add('hidden');
    counter.classList.remove('hidden');
    countDisplay.textContent = quantity;
  } else {
    addToCart.classList.remove("hidden");
    counter.classList.add("hidden");
  }
}

  
// let addCartBtn = productItem.querySelector(".addToCart-btn");

// addCartBtn.addEventListener('click', () => {
//   if (cartItems[key] === null) {
//     cartItems[key] = products[key];
//     cartItems[key].quantity = 1;
//   }

// const cartControl = e.target.closest('.cart-control');
    // const addCartBtn = cartControl.querySelector('.addToCart-btn');
    // const itemCounter = cartControl.querySelector('.item-counter');
  
    // Change cart control state when button clicked
    // addCartBtn.classList.add('hidden');
    // itemCounter.classList.remove('hidden');


function addToCart() {}
