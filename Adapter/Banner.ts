class Banner {
  private string: string;

  constructor(string: string) {
    this.string = string;
  }

  showWithParen(): void {
    console.log(`(${this.string})`);
  }

  showWithAster(): void {
    console.log(`*${this.string}*`);
  }
}

export default Banner;
