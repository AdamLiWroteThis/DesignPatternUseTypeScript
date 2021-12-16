import random from "random";
import NumberGenerator from "./NumberGenerator";
class RandomNumberGenerator extends NumberGenerator {
  private number: number;
  public constructor() {
    super();
    this.number = 0;
  }
  public getNumber(): number {
    return this.number;
  }
  public execute(): void {
    for (let i = 0; i < 20; i++) {
      this.number = random.int(0, 49);
      this.notifyObservers();
    }
  }
}

export default RandomNumberGenerator;
