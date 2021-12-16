import NumberGenerator from "./NumberGenerator";
import Observer from "./Observer";
class DigitObserver implements Observer {
  public update(generator: NumberGenerator): void {
    console.log("DigitObserver:" + generator.getNumber());
  }
}

export default DigitObserver;
