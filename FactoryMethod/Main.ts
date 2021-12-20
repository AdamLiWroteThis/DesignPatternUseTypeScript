import Factory from "./Factory";
import IDCardFactory from "./IDCardFactory";
import Product from "./Product";

class Main {
  public static main(args: string[]): void {
    let factory: Factory = new IDCardFactory();
    let card1: Product = factory.create("小明");
    let card2: Product = factory.create("小红");
    let card3: Product = factory.create("小刚");
    card1.use();
    card2.use();
    card3.use();
  }
}

Main.main([""]);
