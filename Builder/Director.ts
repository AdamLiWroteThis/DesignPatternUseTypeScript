import Builder from "./Builder";

class Director {
  private builder: Builder;
  public constructor(builder: Builder) {
    this.builder = builder;
  }
  public construct(): void {
    this.builder.makeTitle("Greeting");
    this.builder.makeString("从早上至下午");
    this.builder.makeItems(["早上好", "下午好。"]);
    this.builder.makeString("晚上");
    this.builder.makeItems(["晚上好。", "晚安。", "再见。"]);
    this.builder.close();
  }
}

export default Director;
