import AbstractDisplay from "./AbstractDisplay";
import CharDisplay from "./CharDisplay";
import StringDisplay from "./StringDisplay";

class Main {
  public static main(args: string[]): void {
    let d1: AbstractDisplay = new CharDisplay("H");
    let d2: AbstractDisplay = new StringDisplay("Hello, world.");
    let d3: AbstractDisplay = new StringDisplay("你好，世界。");

    d1.display();
    d2.display();
    d3.display();
  }
}

Main.main([""]);
