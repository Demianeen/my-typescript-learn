"use strict";
class Product {
    id;
    title;
    price;
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    date;
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    address;
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    shopId;
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
class Cart {
    cart = [];
    delivery;
    addProduct(product) {
        this.cart.push(product);
    }
    deleteProduct(id) {
        this.cart = this.cart.filter(product => product.id !== id);
    }
    getSum() {
        return this.cart
            .map((product) => product.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.cart.length == 1) {
            throw new Error('Нету ни одного товара в корзине');
        }
        if (!this.delivery) {
            throw new Error('Выберите способ доставки');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(1, 'Chips', 120));
cart.addProduct(new Product(2, 'Chips XXL', 120));
cart.addProduct(new Product(3, 'Bread', 120));
cart.deleteProduct(1);
cart.setDelivery(new HomeDelivery(new Date(), 'Pyskina'));
console.log(cart.getSum());
console.log(cart.checkout());
