import Border from "./Border";
import Display from "./Display";

class FullBorder extends Border {
  constructor(display: Display) {
    super(display);
  }
  getColumns(): number {
    return 1 + this.display.getColumns() + 1;
  }
  getRows(): number {
    return 1 + this.display.getRows() + 1;
  }
  getRowText(row: number): string {
    if (row === 0) {
      return `+${this.makeLine("-", this.display.getColumns())}+`;
    } else if (row === this.display.getRows() + 1) {
      return `+${this.makeLine("-", this.display.getColumns())}+`;
    } else {
      return `|${this.getRowText(row - 1)}|`;
    }
  }
  makeLine(ch: string, count: number) {
    let result: string = "";
    for (let i = 0; i < count; i++) {
      result += ch;
    }
    return result;
  }
}

export default FullBorder;
