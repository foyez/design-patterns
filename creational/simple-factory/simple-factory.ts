// First of all we have a door interface and the implementation
interface Door {
  getWidth(): number;
  getHeight(): number;
}

class WoodenDoor implements Door {
  protected width: number;
  protected height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }
}

// Then we have our door factory that makes the door and returns it
class DoorFactory {
  public static makeDoor(width: number, height: number): Door {
    return new WoodenDoor(width, height);
  }
}

// And then it can be used as

// Make me a door of 100x200
const door = DoorFactory.makeDoor(100, 200);

console.log("Width: ", door.getWidth());
console.log("Height: ", door.getHeight());

// Make me a door of 50x100
const door2 = DoorFactory.makeDoor(50, 100);
