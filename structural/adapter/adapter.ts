// Consider a game where there is a hunter and he hunts lions.

// First we have an interface Lion that all types of lions have to implement
interface Lion {
  roar(): void;
}

class AfricanLoin implements Lion {
  roar(): void {}
}

class AsianLion implements Lion {
  roar(): void {}
}

// And hunter expects any implementation of Lion interface to hunt.
class Hunter {
  public hunt(lion: Lion) {
    lion.roar();
  }
}

// Now let's say we have to add a WildDog in our game so that hunter can hunt that also. But we can't do that directly because dog has a different interface. To make it compatible for our hunter, we will have to create an adapter that is compatible

// This needs to be added to the game
class WildDog {
  bark(): void {}
}

// Adapter around wild dog to make it compatible with our game
class WildDogAdapter implements Lion {
  protected dog: WildDog;

  constructor(dog: WildDog) {
    this.dog = dog;
  }

  roar(): void {
    this.dog.bark();
  }
}

// And now the WildDog can be used in our game using WildDogAdapter
const wildDog = new WildDog();
const wildDogAdapter = new WildDogAdapter(wildDog);

const hunter = new Hunter();
hunter.hunt(wildDogAdapter);
