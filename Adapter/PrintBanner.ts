import Banner from "./Banner";
import Print from "./Print";

class PrintBanner extends Banner implements Print {
  constructor(string: string) {
    super(string);
  }

  printWeak(): void {
    this.showWithParen();
  }
  printStrong(): void {
    this.showWithAster();
  }
}

export default PrintBanner;
