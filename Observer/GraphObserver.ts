import NumberGenerator from "./NumberGenerator";
import Observer from "./Observer";

export default class GraphObserver implements Observer {
  public update(generator: NumberGenerator): void {
    let consoleStr: string = "GraphObserver:";
    let count: number = generator.getNumber();
    for (let i: number = 0; i < count; i++) {
      consoleStr += "*";
    }
    console.log(consoleStr);
    console.log("\n");
  }
}
