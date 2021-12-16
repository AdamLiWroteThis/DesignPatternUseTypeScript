import RandomNumberGenerator from "./RandomNumberGenerator";
import NumberGenerator from "./NumberGenerator";
import DigitObserver from "./DigitObserver";
import GraphObserver from "./GraphObserver";
class Main {
  public static main(args: Array<string>): void {
    let generator: NumberGenerator = new RandomNumberGenerator();
    let observer1 = new DigitObserver();
    let observer2 = new GraphObserver();
    generator.addObserver(observer1);
    generator.addObserver(observer2);
    generator.execute();
  }
}

Main.main([""]);
