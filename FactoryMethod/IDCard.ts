import Product from "./Product";

class IDCard extends Product {
  private owner: string;

  constructor(owner: string) {
    super();
    console.log(`制作${owner}的ID卡。`);
    this.owner = owner;
  }

  public use(): void {
    console.log(`使用${this.owner}的ID卡。`);
  }

  public getOwner(): string {
    return this.owner;
  }
}

export default IDCard;
