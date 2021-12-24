import CountDisplay from "./CountDisplay";
import Display from "./Display";
import StringDisplayImpl from "./StringDisplayImpl";

class Main {
  public static main(args: string[]): void {
    let d1: Display = new Display(new StringDisplayImpl("Hello, China."));
    let d2: Display = new CountDisplay(new StringDisplayImpl("Hello, World."));
    let d3: CountDisplay = new CountDisplay(
      new StringDisplayImpl("Hello, Universe")
    );

    d1.display();
    d2.display();
    d3.display();
    d3.multiDisplay(5);
  }
}

Main.main([""]);
