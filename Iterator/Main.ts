import Book from "./Book";
import BookShelf from "./BookShelf";
import Iterator from "./Iterator";

class Main {
  public static main(args: string[]): void {
    let bookShelf: BookShelf = new BookShelf(4);
    bookShelf.appendBook(new Book("Around the World in 80 Days"));
    bookShelf.appendBook(new Book("Bible"));
    bookShelf.appendBook(new Book("Cinderella"));
    bookShelf.appendBook(new Book("Daddy-Long-Legs"));
    let it: Iterator = bookShelf.iterator();
    while (it.hasNext()) {
      const book: any = it.next();
      console.log(book.getName());
    }
  }
}

Main.main([""]);
