import NumberGenerator from "./NumberGenerator";
import Observer from "./Observer";

export default class DigitObserver implements Observer {
  public update(generator: NumberGenerator): void {
    console.log("DigitObserver:" + generator.getNumber());
  }
}
