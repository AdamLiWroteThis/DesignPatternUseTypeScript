import Display from "./Display";
import FullBorder from "./FullBorder";
import SideBorder from "./SideBorder";
import StringDisplay from "./StringDisplay";

class Main {
  static main(args: string[]): void {
    let b1: Display = new StringDisplay("Hello, world.");
    let b2: Display = new SideBorder(b1, "#");
    let b3: Display = new FullBorder(b2);
    b1.show();
    b2.show();
    b3.show();

    let b4: Display = new SideBorder(
      new FullBorder(
        new FullBorder(
          new SideBorder(new FullBorder(new StringDisplay("你好，世界。")), "*")
        )
      ),
      ""
    );
    b4.show();
  }
}

Main.main([""]);
