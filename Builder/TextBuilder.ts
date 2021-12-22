import Builder from "./Builder";

class TextBuilder extends Builder {
  private buffer: string = "";
  public makeTitle(title: string): void {
    this.buffer += "=======================\n";
    this.buffer += `「${title}」\n`;
    this.buffer += "\n";
  }
  public makeString(str: string): void {
    this.buffer += `*${str}\n`;
    this.buffer += "\n";
  }
  public makeItems(items: string[]): void {
    for (let i: number = 0; i < items.length; i++) {
      this.buffer += `   ·${items[i]}\n`;
    }
    this.buffer += "\n";
  }
  public close(): void {
    this.buffer += "=======================\n";
  }
  public getResult(): string {
    return this.buffer;
  }
}

export default TextBuilder;
