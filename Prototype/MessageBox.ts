import Product from "./Product";
import _ from "lodash";

class MessageBox implements Product {
  private decochar: string;
  public constructor(decochar: string) {
    this.decochar = decochar;
  }
  public use(s: string): void {
    let length: number = s.length;
    let _temp_string: string = "";
    for (let i: number = 0; i < length + 4; i++) {
      _temp_string += this.decochar;
    }
    console.log(_temp_string);
    // console.log("");
    console.log(`${this.decochar} ${s} ${this.decochar}`);
    console.log(_temp_string);
    console.log("");
  }
  public createClone(): Product {
    let p: Product = _.cloneDeep(this) as Product;
    return p;
  }
}

export default MessageBox;
