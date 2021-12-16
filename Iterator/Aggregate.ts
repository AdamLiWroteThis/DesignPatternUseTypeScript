import Iterator from "./Iterator";

interface Aggregate {
  iterator(): Iterator;
}

export default Aggregate;
