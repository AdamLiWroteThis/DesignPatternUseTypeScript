import AbstractDisplay from "./AbstractDisplay";

class CharDisplay extends AbstractDisplay {
  private ch: string;
  constructor(ch: string) {
    super();
    this.ch = ch;
  }

  public open(): void {
    console.log("<<");
  }
  public print(): void {
    console.log(this.ch);
  }
  public close(): void {
    console.log(">>");
  }
}

export default CharDisplay;
