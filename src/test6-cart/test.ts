class Product {
	public id: number;
	public title: string;
	public price: number;

	constructor (id: number, title: string, price: number) {
		this.id = id;
		this.title = title;
		this.price = price;
	}
}

class Delivery {
	public date: Date;
	
	constructor (date: Date) {
		this.date = date;
	}
}

class HomeDelivery extends Delivery{
	public address: string;

	constructor (date: Date, address: string) {
		super(date);
		this.address = address;
	}
}

class ShopDelivery extends Delivery{
	public shopId: number;

	constructor (shopId: number) {
		super(new Date());
		this.shopId = shopId;
	}
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
	private cart: Product[] = [];
	private delivery: DeliveryOptions;

	addProduct(product: Product): void {
		this.cart.push(product);
	}

	deleteProduct(id: number): void {
		this.cart = this.cart.filter(product => product.id !== id);
	}

	getSum(): number {
		return this.cart
			.map((product: Product) => product.price)
			.reduce((p1: number, p2: number) => p1 + p2);
	}

	setDelivery(delivery: DeliveryOptions): void {
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