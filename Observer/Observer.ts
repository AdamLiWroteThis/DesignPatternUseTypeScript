import NumberGenerator from "./NumberGenerator";
interface Observer {
  update(generator: NumberGenerator): void;
}

export default Observer;
