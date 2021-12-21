interface Product {
  use(s: string): void;
  createClone(): Product;
}

export default Product;
