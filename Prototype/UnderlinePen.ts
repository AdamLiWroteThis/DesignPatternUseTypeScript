import Product from "./Product";
import _ from "lodash";

class UnderlinePen implements Product {
  private ulchar: string;
  public constructor(ulchar: string) {
    this.ulchar = ulchar;
  }
  use(s: string): void {
    let length: number = s.length;
    console.log(`\\${s}\\`);
    let _temp_string: string = " ";
    for (let i: number = 0; i < length; i++) {
      _temp_string += this.ulchar;
    }
    console.log(_temp_string);
    console.log("");
  }
  createClone(): Product {
    let p: Product = _.cloneDeep(this) as Product;
    return p;
  }
}

export default UnderlinePen;
