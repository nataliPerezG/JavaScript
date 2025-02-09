export let cart = [];

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
      quantity: 1
    })
  }
}

