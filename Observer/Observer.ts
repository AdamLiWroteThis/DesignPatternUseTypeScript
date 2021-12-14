import NumberGenerator from "./NumberGenerator";

export default interface Observer {
  update(generator: NumberGenerator): void;
}
