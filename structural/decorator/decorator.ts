// First of all we have a simple coffee implementing the coffee interface

interface Coffee {
  getCost(): number;
  getDescription(): string;
}

class SimpleCoffee implements Coffee {
  public getCost(): number {
    return 10;
  }

  public getDescription(): string {
    return "Simple Coffee";
  }
}

// We want to make the code extensible to allow options to modify it if required.
// Lets make some add-ons (decorators)
class MilkCoffee implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public getCost(): number {
    return this.coffee.getCost() + 2;
  }

  public getDescription(): string {
    return this.coffee.getDescription() + ", milk";
  }
}

class WhipCoffee implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public getCost(): number {
    return this.coffee.getCost() + 5;
  }

  public getDescription(): string {
    return this.coffee.getDescription() + ", whip";
  }
}

class VanillaCoffee implements Coffee {
  protected coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  public getCost(): number {
    return this.coffee.getCost() + 3;
  }

  public getDescription(): string {
    return this.coffee.getDescription() + ", vanilla";
  }
}

const simpleCoffee = new SimpleCoffee();
console.log(simpleCoffee.getCost()); // 10
console.log(simpleCoffee.getDescription()); // Simple Coffee

const milkCoffee = new MilkCoffee(simpleCoffee);
console.log(milkCoffee.getCost()); // 12
console.log(milkCoffee.getDescription()); // Simple Coffee, milk

const whipCoffee = new WhipCoffee(milkCoffee);
console.log(whipCoffee.getCost()); // 17
console.log(whipCoffee.getDescription()); // Simple Coffee, milk, whip

const vanillaCoffee = new VanillaCoffee(whipCoffee);
console.log(vanillaCoffee.getCost()); // 20
console.log(vanillaCoffee.getDescription()); // Simple Coffee, milk, whip, vanilla
