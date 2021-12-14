import Observer from "./Observer";

export default abstract class NumberGenerator {
  private observers: Array<Observer> = new Array<Observer>();
  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }
  public deleteObserver(observer: Observer): void {
    this.observers = this.observers.filter(
      (aObserver) => aObserver !== observer
    );
  }
  public notifyObservers(): void {
    for (const aObserver of this.observers) {
      aObserver.update(this);
    }
  }
  public abstract getNumber(): number;
  public abstract execute(): void;
}
