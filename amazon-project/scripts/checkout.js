import { cart, removeFromCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatMoney } from "../utils/money.js";


let orderSumary = document.querySelector(".order-summary")
let productHtml = "";

cart.forEach((cartItem) => {
  let productId = cartItem.productId;
  let sameProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      sameProduct = product;
    }
  })

  productHtml += `
  <div class="cart-item-container"
  id="product-${productId}">

  <div class="delivery-date">
    Delivery date: Tuesday, June 21
  </div>
  <div class="cart-item-details-grid">
    <img class="product-image" src=${sameProduct.image}>
    <div class="cart-item-details">
      <div class="product-name">
        ${sameProduct.name}
      </div>
      <div class="product-price">
        $${formatMoney(sameProduct.priceCents)}
      </div>
      <div class="product-quantity">
        <span>
          Quantity: <span class="quantity-label">
          ${cartItem.quantity}</span>
        </span>
        <span class="update-quantity-link link-primary">
          Update
        </span>
        <span class="delete-quantity-link link-primary"
        data-product-id="${sameProduct.id}">
          Delete
        </span>
      </div>
    </div>

    <div class="delivery-options">
      <div class="delivery-options-title">
        Choose a delivery option:
      </div>
      <div class="delivery-option">
        <input type="radio" checked class="delivery-option-input"
        name="delivery-option-${sameProduct.id}">
        <div>
          <div class="delivery-option-date">
            Tuesday, June 21
          </div>
          <div class="delivery-option-price">
            FREE Shipping
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio" class="delivery-option-input"
        name="delivery-option-${sameProduct.id}">
        <div>
          <div class="delivery-option-date">
            Wednesday, June 15
          </div>
          <div class="delivery-option-price">
            $4.99 - Shipping
          </div>
        </div>
      </div>
      <div class="delivery-option">
        <input type="radio" class="delivery-option-input"
        name="delivery-option-${sameProduct.id}">
        <div>
          <div class="delivery-option-date">
            Monday, June 13
          </div>
          <div class="delivery-option-price">
            $9.99 - Shipping
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
})

orderSumary.innerHTML = productHtml;

let deleteLinks = document.querySelectorAll(".delete-quantity-link");

deleteLinks.forEach((link) => {

  link.addEventListener("click", () => {
    let productId = link.dataset.productId
    removeFromCart(productId)
    let container = document.getElementById(`product-${productId}`)
    container.remove();
  })

})

