import Border from "./Border";
import Display from "./Display";

class SideBorder extends Border {
  private borderChar: string;
  constructor(display: Display, char: string) {
    super(display);
    this.borderChar = char;
  }
  getColumns(): number {
    return 1 + this.display.getColumns();
  }
  getRows(): number {
    return this.display.getRows();
  }
  getRowText(row: number): string {
    return this.borderChar + this.display.getRowText(row) + this.borderChar;
  }
}

export default SideBorder;
