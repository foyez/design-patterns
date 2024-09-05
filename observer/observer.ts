class OnlineStoreItem {
  private name: string;
  private stock: number;
  private customers: Customer[];

  constructor(name: string, stock: number) {
    this.name = name;
    this.stock = stock;
    this.customers = [];
  }

  public getName(): string {
    return this.name;
  }

  public subscribe(customer: Customer) {
    this.customers.push(customer);
  }

  public unsubscribe(customer: Customer) {
    this.customers = this.customers.filter((c) => c !== customer);
  }

  public updateStock(newStock: number) {
    if (this.stock === 0 && newStock > 0) {
      this.notify();
    }
    this.stock = newStock;
  }

  private notify() {
    this.customers.forEach((customer) => {
      customer.notify(this);
    });
  }
}

class Customer {
  private name: string;
  private notifications: number;

  constructor(name: string) {
    this.name = name;
    this.notifications = 0;
  }

  public notify(item: OnlineStoreItem) {
    console.log(`${this.name} is notified: ${item.getName()}`);
    this.notifications++;
  }

  public countNotifications(): number {
    return this.notifications;
  }
}

const item1 = new OnlineStoreItem("Cricket Bat", 0);

const customer1 = new Customer("Rahim");
const customer2 = new Customer("Karim");

item1.subscribe(customer1);
item1.subscribe(customer2);

item1.updateStock(5); // customer1 and customer2 are notified

item1.unsubscribe(customer1);

item1.updateStock(0); // No one is notified
item1.updateStock(3); // Only customer2 is notified
item1.updateStock(2); // No one is notified

console.log(customer1.countNotifications()); // 1
console.log(customer2.countNotifications()); // 2
