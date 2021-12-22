import Builder from "./Builder";

class HTMLBuilder extends Builder {
  private filename: string = "";
  private writer: string = "";
  public makeTitle(title: string): void {
    this.filename = title + ".html";
    this.writer += `<html><head><title>${title}</title></head><body>`;
    this.writer += `<h1>${title}</h1>`;
  }
  public makeString(str: string): void {
    this.writer += `<p>${str}</p>`;
  }
  public makeItems(items: string[]): void {
    this.writer += "<ul>";
    for (let i: number = 0; i < items.length; i++) {
      this.writer += `<li>${items[i]}</li>`;
    }
    this.writer += "</ul>";
  }
  public close(): void {
    this.writer += "</body></html>";
  }
  public getResult(): object {
    return {
      filename: this.filename,
      writer: this.writer,
    };
  }
}

export default HTMLBuilder;
