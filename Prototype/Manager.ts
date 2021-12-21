import Product from "./Product";

class Manager {
  private showcase: Map<string, Product> = new Map<string, Product>();

  public register(name: string, proto: Product): void {
    this.showcase.set(name, proto);
  }
  public create(protoname: string): Product {
    let p: Product = this.showcase.get(protoname) as Product;
    return p.createClone();
  }
}

export default Manager;
