import Display from "./Display";
import DisplayImpl from "./DisplayImpl";

class CountDisplay extends Display {
  public constructor(impl: DisplayImpl) {
    super(impl);
  }

  public multiDisplay(times: number) {
    this.open();
    for (let i = 0; i < times; i++) {
      this.print();
    }
    this.close();
  }
}

export default CountDisplay;
