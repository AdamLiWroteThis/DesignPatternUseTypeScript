import Display from "./Display";

abstract class Border extends Display {
  protected display: Display;
  protected constructor(display: Display) {
    super();
    this.display = display;
  }
}

export default Border;
