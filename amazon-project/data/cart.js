export let cart = JSON.parse(localStorage.getItem("cart"));

console.log(cart);

if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1
    }
  ]
}

console.log(cart)


const saveToStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const addProductCart = (productId) => {
  let existProduct;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      existProduct = cartItem
    }
  })
  if (existProduct) {
    existProduct.quantity += 1
  } else {
    cart.push({
      productId,
      quantity: 2
    })
  }
  saveToStorage()
}

export const removeFromCart = (productId) => {
  let newCart = [];
  cart.forEach((item) => {
    if (item.productId !== productId) {
      newCart.push(item)
    }
  })
  cart = newCart;
  saveToStorage()
}

