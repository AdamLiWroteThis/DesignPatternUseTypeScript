class Singleton {
  private static singletion: Singleton = new Singleton();

  private constructor() {
    console.log("生成了一个实例。");
  }
  public static getInstance(): Singleton {
    return this.singletion;
  }
}

export default Singleton;
