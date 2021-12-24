import DisplayImpl from "./DisplayImpl";

class Display {
  private impl: DisplayImpl;
  public constructor(impl: DisplayImpl) {
    this.impl = impl;
  }
  public open(): void {
    this.impl.rawOpen();
  }
  public print(): void {
    this.impl.rawPrint();
  }
  public close(): void {
    this.impl.rawClose();
  }
  public display(): void {
    this.open();
    this.print();
    this.close();
  }
}

export default Display;
