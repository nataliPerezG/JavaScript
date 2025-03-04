import { cart, addProductCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatMoney } from "../utils/money.js";

let productHTML = "";

products.forEach((product) => {
  productHTML += `
  <div class="product-container">
    <div class="product-image-container">
      <img class="product-image" src=
      ${product.image}>
    </div>
    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>
    <div class="product-rating-container">
      <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>
    <div class="product-price">
      $${formatMoney(product.priceCents)}
    </div>
    <div class="product-quantity-container">
      <select>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div class="product-spacer"></div>
    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary"
    data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>
  `
})

// Insertar datos en el html:

let productsContainer = document.querySelector(".products-grid");
productsContainer.innerHTML = productHTML;

// funciones:

const updateCartQuantity = () => {
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  })
  let showCartQuantity = document.querySelector(".cart-quantity");
  showCartQuantity.textContent = cartQuantity;
}


// Función ppal:

let buttonAddCart = document.querySelectorAll(".add-to-cart-button");

buttonAddCart.forEach((button) => {
  button.addEventListener("click", () => {
    let productId = button.dataset.productId;
    addProductCart();
    updateCartQuantity()
  })
});




