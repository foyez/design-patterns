class OnlineStoreItem:
    def __init__(self, name, stock):
        self.name = name
        self.stock = stock
        self.customers = []

    def subscribe(self, customer):
        self.customers.append(customer)

    def unsubscribe(self, customer):
        self.customers.remove(customer)

    def updateStock(self, new_stock):
        if self.stock == 0 and new_stock > 0:
            self.notify()
        self.stock = new_stock

    def notify(self):
        for customer in self.customers:
            customer.notify(self)

class Customer:
    def __init__(self, name):
        self.name = name
        self.notifications = 0

    def notify(self, item):
        print(f"{self.name} is notified: {item.name} is back in stock")
        self.notifications += 1

    def countNotifications(self):
        return self.notifications

item1 = OnlineStoreItem("Cricket Bat", 0)

customer1 = Customer("Rahim")
customer2 = Customer("Karim")

item1.subscribe(customer1)
item1.subscribe(customer2)
item1.updateStock(5) # customer1 and customer2 are notified

item1.unsubscribe(customer1)

item1.updateStock(0) # No one is notified
item1.updateStock(3) # Only customer2 is notified
item1.updateStock(2) # No one is notified

print(customer1.countNotifications()) # 1
print(customer2.countNotifications()) # 2