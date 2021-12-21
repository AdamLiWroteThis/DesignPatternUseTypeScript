import Manager from "./Manager";
import MessageBox from "./MessageBox";
import Product from "./Product";
import UnderlinePen from "./UnderlinePen";

class Main {
  public static main(args: string[]): void {
    let manager: Manager = new Manager();
    let upen: UnderlinePen = new UnderlinePen("~");
    let mbox: MessageBox = new MessageBox("*");
    let sbox: MessageBox = new MessageBox("/");
    manager.register("strong message", upen);
    manager.register("warning box", mbox);
    manager.register("slash box", sbox);

    let p1: Product = manager.create("strong message");
    p1.use("Hello, world.");
    let p2: Product = manager.create("warning box");
    p2.use("Hello, world.");
    let p3: Product = manager.create("slash box");
    p3.use("Hello, world.");
  }
}

Main.main([""]);
