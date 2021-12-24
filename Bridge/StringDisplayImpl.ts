import DisplayImpl from "./DisplayImpl";

class StringDisplayImpl extends DisplayImpl {
  private string: string;
  private width: number;
  public constructor(string: string) {
    super();
    this.string = string;
    this.width = string.length;
  }
  public rawOpen(): void {
    this.printLine();
  }
  public rawPrint(): void {
    console.log(`|${this.string}|`);
  }
  public rawClose(): void {
    this.printLine();
  }
  private printLine(): void {
    let result: string = "+";
    for (let i = 0; i < this.width; i++) {
      result += "-";
    }
    console.log(result + "+");
  }
}

export default StringDisplayImpl;
