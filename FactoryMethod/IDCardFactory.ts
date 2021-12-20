import Factory from "./Factory";
import IDCard from "./IDCard";
import Product from "./Product";

class IDCardFactory extends Factory {
  private owners: string[] = [];
  protected createProduct(owner: string): Product {
    return new IDCard(owner);
  }
  protected registerProduct(product: Product): void {
    this.owners.push((product as IDCard).getOwner());
  }
  public getOwners(): string[] {
    return this.owners;
  }
}

export default IDCardFactory;
