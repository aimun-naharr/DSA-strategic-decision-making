class ShoppingCart {
  constructor() {
    this.cart = []
    this.top = -1
    this.checkoutStack = [];
  }
  push(item) {
    this.cart[++this.top] = item;
  }
  pop() {
    if (this.isEmpty()) {
      console.log('stack underflow')
    }
    const lastElement = this.cart[this.top];
    this.top--;
    this.cart.length = this.top + 1;
    return lastElement;
  }
  peek() {
    return this.cart[this.top]
  }
  isEmpty() {
    return this.top === -1;
  }
  finalize() {
    for (let i = this.cart.length - 1; i >= 0; i--) {
      this.checkoutStack.push(this.cart[i])
    }
    return this.checkoutStack;
  }
}

const cart = new ShoppingCart()
cart.push(1);
cart.push(2);
cart.push(3)
// const last = cart.pop();
// const peek = cart.peek();
// console.log('last', last);
cart.finalize();
console.log(cart)