import Director from "./Director";
import HTMLBuilder from "./HTMLBuilder";
import TextBuilder from "./TextBuilder";

class Main {
  public static main(args: string[]): void {
    if (args.length !== 1) {
      this.usage();
      return;
    }

    if (args[0] === "plain") {
      const textbuilder: TextBuilder = new TextBuilder();
      const director = new Director(textbuilder);
      director.construct();
      const result: string = textbuilder.getResult();
      console.log(result);
    } else if (args[0] === "html") {
      const htmlbuilder: HTMLBuilder = new HTMLBuilder();
      const director = new Director(htmlbuilder);
      director.construct();
      const result: object = htmlbuilder.getResult();
      console.log(result);
    } else {
      this.usage();
      return;
    }
  }

  public static usage(): void {
    console.log("Usage: java Main plain 编写纯文本文档");
    console.log("Usage: java Main html 编写HTML文档");
  }
}

Main.main(["plain"]);
Main.main(["html"]);
