import Singleton from "./Singleton";

class Main {
  public static main(args: string[]) {
    console.log("Start.");
    let obj1 = Singleton.getInstance();
    let obj2 = Singleton.getInstance();
    if (obj1 === obj2) {
      console.log("obj1与obj2是相同的实例。");
    } else {
      console.log("obj1与obj2是不同的实例。");
    }
    console.log("End.");
  }
}

Main.main([""]);
