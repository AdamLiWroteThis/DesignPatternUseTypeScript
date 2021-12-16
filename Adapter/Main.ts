import Print from "./Print";
import PrintBanner from "./PrintBanner";

class Main {
  public static main(args: string[]): void {
    let p: Print = new PrintBanner("Hello");
    p.printWeak();
    p.printStrong();
  }
}

Main.main([""]);
