import Aggregate from "./Aggregate";
import Book from "./Book";
import Iterator from "./Iterator";
import BookShelfIterator from "./BookShelfIterator";

class BookShelf implements Aggregate {
  private books: Book[];
  private last: number = 0;

  constructor(maxsize: number) {
    this.books = new Array<Book>(maxsize);
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }

  appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }

  getLength(): number {
    return this.last;
  }

  iterator(): Iterator {
    return new BookShelfIterator(this);
  }
}

export default BookShelf;
